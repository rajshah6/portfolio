"use client";
import { soundState } from "@/atoms/SoundAtom";
import { contactData } from "@/db/main";
import { getAnalytics, logEvent } from "firebase/analytics";
import { Variants, motion } from "framer-motion";
import React, { useState } from "react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to an API
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    if (SoundActive) {
      playClick();
    }
    logEvent(getAnalytics(), "Contact Form Submitted");

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
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
              placeholder="John Doe"
              required
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
              placeholder="john@example.com"
              required
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
            placeholder="Tell me about your project..."
            rows={6}
            required
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
        >
          {isSubmitted ? "Message Sent!" : "Send Message"}
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
