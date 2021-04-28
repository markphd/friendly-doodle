import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import styles from "../styles/Cover.module.css";
import Link from "next/link";

const images = [
  "/static/home-men-cover.jpg",
  "/static/home-women-cover.jpg",
  "/static/home-unisex-cover.jpg",
];

const cta = ["Men", "Women", "Unisex"];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Cover(props) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <motion.div className={styles.cover}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.figure
          className={styles.slide}
          key={page}
          data-slide={imageIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", bounce: 0 },
            opacity: { duration: 0.6 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className={styles.next} onClick={() => paginate(1)}>
        <span>next →<br/>
        <span className={styles.ctalabel}>{`${cta[imageIndex == 2 ? 0 : imageIndex+1]}`}</span></span>
      </div>
      <div className={styles.prev} onClick={() => paginate(-1)}>
        <span>← prev <br/>
        <span className={styles.ctalabel}>{`${cta[imageIndex == 0 ? 2 : imageIndex-1]}`}</span></span>
      </div>
      <div className={styles.cta}>
        <Link
          href={cta[imageIndex].toLowerCase()}
        >{`SHOP ${cta[imageIndex]}`}</Link>
      </div>
    </motion.div>
  );
}
