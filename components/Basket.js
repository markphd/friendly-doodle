import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/Basket.module.css";
import { BasketContext } from "../contexts/BasketContext";

const Basket = ({ theme }) => {
  const { orderBasket, setOrderBasket } = useContext(BasketContext);

  return (
    <Link href="/order">
      <div className={styles.cart} data-theme={theme}>
        <span>
          {orderBasket &&
            orderBasket.basket.reduce((starter, item) => starter + item.qty, 0)}
        </span>
      </div>
    </Link>
  );
};

export default Basket;
