import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/Menu.module.css";

const easing = [0.4, 0, 0, 1];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.3, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easing,
    },
  },
};

const fadeOutSlideLeft = {
  initial: {
    x: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: easing },
  },
  animate: {
    x: -200,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easing,
    },
  },
};

const variants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: { opacity: 0, x: "-100%" },
};

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export default function Menu({ theme }, context) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.menu} data-toggle={isOpen}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        data-theme={theme}
      >
        <span></span>
        <span></span>
      </button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={styles.overlay}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
      >
        {isOpen && (
          <>
            <motion.ul
              initial="initial"
              animate="animate"
              variants={stagger}
              exit={fadeOutSlideLeft}
            >
              <div className={styles.pages}>
                <motion.li className={styles.menulink} variants={fadeInUp}>
                  <Link href="/men">
                    <p>
                      <a>Men</a>
                    </p>
                  </Link>
                </motion.li>
                <motion.li className={styles.menulink} variants={fadeInUp}>
                  <Link href="/women">
                    <p>
                      <a>Women</a>
                    </p>
                  </Link>
                </motion.li>
                <motion.li className={styles.menulink} variants={fadeInUp}>
                  <Link href="/unisex">
                    <p>
                      <a>Unisex</a>
                    </p>
                  </Link>
                </motion.li>
              </div>

              <div className={styles.social}>
                <motion.li className={styles.socialurl} variants={fadeInUp}>
                  <Link href="https://www.facebook.com/ProjectScentsPerfume">
                    <p>
                      <a href="#">Facebook</a>
                    </p>
                  </Link>
                </motion.li>
                <motion.li className={styles.socialurl} variants={fadeInUp}>
                  <Link href="https://www.instagram.com/projectscents/">
                    <p>
                      <a href="#">Instagram</a>
                    </p>
                  </Link>
                </motion.li>
                <motion.li className={styles.socialurl} variants={fadeInUp}>
                  <Link href="mailto://info@projectscents.com">
                    <p>
                      <a href="#">info@projectscents.com</a>
                    </p>
                  </Link>
                </motion.li>
              </div>
            </motion.ul>
          </>
        )}
      </motion.div>

      {isOpen && (
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.fullOverlay}
        ></motion.div>
      )}
    </div>
  );
}
