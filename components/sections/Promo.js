import React from "react";
import styles from "../../styles/Promo.module.css";

export default function Promo(props) {
  return (
    <section className={styles.promo}>
      <figure className={styles.productw}></figure>
      {/* <span className={styles.hed}>Delivery FAQ</span> */}
      <h2 className={styles.headline}>We bring the shop to you</h2>
      <p className={styles.body}>
        When we deliver your order we bring testers with us for you to try, so
        you get the scent you want before you pay.
      </p>

      <h2 className={styles.headline}>Free same day delivery</h2>
      <p className={styles.body}>
        Delivery is free for Dubai and Sharjah City limits except Jebel Ali
        areas. All other Emirates will be shipped by courier.
      </p>

      <h2 className={styles.headline}>Luxury quality, not luxury price</h2>
      <p className={styles.body}>
        All our perfume is at AED 55 per 75ml and you'll get an incredibly long
        lasting scent inspired by branded perfumes.
      </p>
    </section>
  );
}
