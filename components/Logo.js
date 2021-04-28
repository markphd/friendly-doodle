import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Logo.module.css";

export default function Logo({ theme }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link href="/">
      <div
        className={`${styles.logo} ${
          scrollPosition > 100 ? `${styles.whitebg}` : ""
        }`}
        // className={styles.logo}
        data-position={scrollPosition}
        data-theme={theme}
      ></div>
    </Link>
  );
}
