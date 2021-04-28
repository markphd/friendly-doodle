import React from 'react';
import styles from "../styles/EmptyCart.module.css";

export default function EmptyCart() {
  return (
    <div>
      <p>The cart is empty. Select some products to buy.</p>
      <section className={styles.category}>
        <div>
          <h2>Men</h2>
        </div>
        <div>
          <h2>Women</h2>
        </div>
        <div><h2>Unisex</h2></div>
      </section>
    </div>
  )
}
