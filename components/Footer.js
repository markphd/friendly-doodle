import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      {/* <h2 className={styles.headline}>
        Quality doesn’t always need to be expensive.
      </h2> */}
      <div className={styles.socials}>
        <div className={styles.brand}>
          <figure className={styles.logo}></figure>
          <p className={styles.copyright}>
            All rights reserved Ⓡ Copyright {new Date().getFullYear()}
          </p>
        </div>
        <span>Facebook</span>
        <span>Instagram</span>
        <span>E-mail</span>
      </div>
    </footer>
  );
}
