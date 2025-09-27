"use client";
import { soundState } from "@/atoms/SoundAtom";
import { contactData } from "@/db/main";
import { getAnalytics, logEvent } from "firebase/analytics";
import { Variants, motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import styles from "../../styles/components/Contact.module.scss";
import { useRecoilValue } from "recoil";
import useSound from "use-sound";

type ContactProps = {};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
interface ApiResponseOk {
  ok: true;
}
interface ApiResponseError {
  ok: false;
  error?: string;
  errors?: string[];
  retryAfter?: number;
}

const containerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const childrenVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const buttonVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const Contact: React.FC<ContactProps> = () => {
  const { SoundActive } = useRecoilValue(soundState);
  const [playPop] = useSound("/sounds/pop.mp3", { volume: 0.2 });
  const [playClick] = useSound("/sounds/box-click.wav", { volume: 0.5 });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cooldownUntil, setCooldownUntil] = useState<number | null>(null);
  const [secondsLeft, setSecondsLeft] = useState<number>(0);

  const COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes
  const LS_KEY = "contact_next_allowed";

  useEffect(() => {
    const ls = typeof window !== "undefined" ? window.localStorage : null;
    if (!ls) return;
    const raw = ls.getItem(LS_KEY);
    if (raw) {
      const ts = Number(raw);
      if (!Number.isNaN(ts)) {
        setCooldownUntil(ts);
      }
    }
  }, []);

  useEffect(() => {
    if (!cooldownUntil) {
      setSecondsLeft(0);
      return;
    }
    const id = setInterval(() => {
      const left = Math.max(0, Math.ceil((cooldownUntil - Date.now()) / 1000));
      setSecondsLeft(left);
      if (left === 0) {
        clearInterval(id);
      }
    }, 1000);
    const initialLeft = Math.max(
      0,
      Math.ceil((cooldownUntil - Date.now()) / 1000)
    );
    setSecondsLeft(initialLeft);
    return () => clearInterval(id);
  }, [cooldownUntil]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (SoundActive) {
      playPop();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const now = Date.now();
    if (cooldownUntil && now < cooldownUntil) {
      setError("Please wait before sending another message.");
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = (await res.json()) as ApiResponseError;
        const message =
          data?.errors?.join(" \n") || data?.error || "Failed to send message.";
        setError(message);
        // Handle server-provided retryAfter
        if (res.status === 429 && typeof data?.retryAfter === "number") {
          const until = Date.now() + data.retryAfter * 1000;
          setCooldownUntil(until);
          try {
            window.localStorage.setItem(LS_KEY, String(until));
          } catch {}
        }
        return;
      }

      const data = (await res.json()) as ApiResponseOk;
      if (data.ok) {
        setIsSubmitted(true);
        if (SoundActive) {
          playClick();
        }
        logEvent(getAnalytics(), "Contact Form Submitted");
        const until = Date.now() + COOLDOWN_MS;
        setCooldownUntil(until);
        try {
          window.localStorage.setItem(LS_KEY, String(until));
        } catch {}
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Hide success after 3s
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className={`${styles.contact}`}
      id="contact"
    >
      <motion.h2
        variants={childrenVariants}
        className={`${styles.contact_title}`}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        variants={childrenVariants}
        className={`${styles.contact_subtitle}`}
      >
        Have a question or want to work together? Drop me a message!
      </motion.p>

      <motion.form
        variants={childrenVariants}
        className={`${styles.contact_form}`}
        onSubmit={handleSubmit}
      >
        {error && (
          <div className={`${styles.contact_form_group}`}>
            <p style={{ color: "#ff6b6b", fontSize: "1.6rem" }}>{error}</p>
          </div>
        )}
        <div className={`${styles.contact_form_row}`}>
          <motion.div
            variants={childrenVariants}
            className={`${styles.contact_form_group}`}
          >
            <label htmlFor="name" className={`${styles.contact_form_label}`}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`${styles.contact_form_input}`}
              placeholder="Raj Shah"
              required
              disabled={isSubmitting || secondsLeft > 0}
            />
          </motion.div>

          <motion.div
            variants={childrenVariants}
            className={`${styles.contact_form_group}`}
          >
            <label htmlFor="email" className={`${styles.contact_form_label}`}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`${styles.contact_form_input}`}
              placeholder="you@example.com"
              required
              disabled={isSubmitting || secondsLeft > 0}
            />
          </motion.div>
        </div>

        <motion.div
          variants={childrenVariants}
          className={`${styles.contact_form_group}`}
        >
          <label htmlFor="subject" className={`${styles.contact_form_label}`}>
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={`${styles.contact_form_input}`}
            placeholder="Let's collaborate!"
            required
            disabled={isSubmitting || secondsLeft > 0}
          />
        </motion.div>

        <motion.div
          variants={childrenVariants}
          className={`${styles.contact_form_group}`}
        >
          <label htmlFor="message" className={`${styles.contact_form_label}`}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className={`${styles.contact_form_textarea}`}
            placeholder="Tell me about LangSketch..."
            rows={6}
            required
            disabled={isSubmitting || secondsLeft > 0}
          />
        </motion.div>

        <motion.button
          type="submit"
          className={`${styles.contact_form_button}`}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onHoverStart={() => {
            if (SoundActive) {
              playPop();
            }
          }}
          disabled={isSubmitting || secondsLeft > 0}
        >
          {isSubmitted
            ? "Message Sent!"
            : secondsLeft > 0
            ? `Please wait ${Math.floor(secondsLeft / 60)}:${String(
                secondsLeft % 60
              ).padStart(2, "0")}`
            : isSubmitting
            ? "Sending..."
            : "Send Message"}
        </motion.button>
      </motion.form>

      <motion.div
        variants={childrenVariants}
        className={`${styles.contact_links}`}
      >
        <p className={`${styles.contact_links_text}`}>Or reach out directly:</p>
        <div className={`${styles.contact_links_container}`}>
          {contactData.links.map((link, i) => (
            <motion.a
              className={`${styles.contact_links_link}`}
              href={link.url}
              target="_blank"
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => {
                if (SoundActive) {
                  playPop();
                }
              }}
              onClick={() => {
                if (SoundActive) {
                  playClick();
                }
                logEvent(getAnalytics(), `${link.label} Contact`);
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <div className={`${styles.contact_circle1}`}></div>
    </motion.div>
  );
};
export default Contact;
