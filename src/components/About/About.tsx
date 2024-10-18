"use client";
import { aboutData } from "@/db/main";
import { Variants, motion } from "framer-motion";
import React from "react";
import styles from "../../styles/components/About.module.scss";

type AboutProps = {};

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

const AboutCard: React.FC<{ title: string; text: string }> = ({ title, text }) => {
  // Replace the word 'SHAD' with a hyperlink
  const formattedText = text.replace(
    'SHAD',
    `<a class='link' href='https://www.shad.ca' target='_blank' rel='noopener noreferrer'>SHAD</a>`
  );

  return (
    <motion.div
      variants={childrenVariants}
      className={`${styles.about_container_card}`}
    >
      <h3 className={`${styles.about_container_card_title}`}>{title}</h3>
      <p
        className={`${styles.about_container_card_text}`}
        dangerouslySetInnerHTML={{ __html: formattedText }} // Use dangerouslySetInnerHTML to render the HTML with the hyperlink
      />
    </motion.div>
  );
};

const About: React.FC<AboutProps> = () => {
  return (
    <div className={`${styles.about}`} id="about">
      <h2 className={`${styles.about_title}`}>{aboutData.title}</h2>
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        className={`${styles.about_container}`}
      >
        {aboutData.cards.map((card, i) => (
          <AboutCard key={i} title={card.title} text={card.text} />
        ))}
      </motion.div>
      <div className={`${styles.about_circle1}`}></div>
    </div>
  );
};

export default About;