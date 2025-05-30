"use client";
import { soundState } from "@/atoms/SoundAtom";
import { contactData } from "@/db/main";
import { getAnalytics, logEvent } from "firebase/analytics";
import { Variants, motion } from "framer-motion";
import React from "react";
import styles from "../../styles/components/Contact.module.scss";
import { useRecoilValue } from "recoil";
import useSound from "use-sound";

type ContactProps = {};
const containerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const childrenVariants: Variants = {
  initial: {
    opacity: 0,
    x: "-50%",
  },
  animate: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};
const linkVariants: Variants = {
  initial: {
    opacity: 0,
    x: "-50%",
    color: "var(--tertiary)",
  },
  animate: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};
const Contact: React.FC<ContactProps> = () => {
  const { SoundActive } = useRecoilValue(soundState);
  const [playPop] = useSound("/sounds/pop.mp3", { volume: 0.2 });
  const [playClick] = useSound("/sounds/box-click.wav", { volume: 0.5 });
  
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className={`${styles.contact}`}
      id="contact"
    >
      <h2 className={`${styles.contact_title}`}>{contactData.title}</h2>
      <div className={`${styles.contact_container}`}>
        {contactData.cards.map((card, i) => (
          <motion.div
            variants={childrenVariants}
            key={i}
            className={`${styles.contact_container_card}`}
          >
            <h3 className={`${styles.contact_container_card_title}`}>
              {card.title}
            </h3>
            <p className={`${styles.contact_container_card_text}`}>
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.div className={`${styles.contact_links}`}>
        {contactData.links.map((link, i) => (
          <motion.a
            className={`${styles.contact_links_link}`}
            href={link.url}
            target="_blank"
            key={i}
            variants={linkVariants}
            whileHover={{ color: "var(--secondary)" }}
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
      </motion.div>
      <div className={`${styles.contact_circle1}`}></div>
    </motion.div>
  );
};
export default Contact;
