import React, { useContext, useState, useEffect } from "react";
import { BasketContext } from "../contexts/BasketContext";
import Logo from "../components/Logo";
import Promo from "../components/sections/Promo";
import Menu from "../components/Menu";
import Basket from "../components/Basket";
import styles from "../styles/Order.module.css";
import "normalize.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Table from "../components/Table";
import EmptyCart from "../components/EmptyCart";
import OrderSummary from "../components/OrderSummary";
import Footer from "../components/Footer";

export default function Order() {
  const { orderBasket, setOrderBasket } = useContext(BasketContext);
  const [basket, setBasket] = useState(orderBasket);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.container}
    >
      <Logo theme="light" />
      <Menu theme="light" />
      <Basket theme="light" />
      <h1 className={styles.heading}>order</h1>
      {/* <div className={styles.photo}></div> */}
      {/* <h1 className={styles.heading}>collection</h1> */}
      <div className={styles.subheading}>
        {console.log(orderBasket)}
        {orderBasket && orderBasket.basket.length > 0
          ? "Order summary"
          : <EmptyCart/>}
      </div>
      {/* <section className={styles.shopbycategory}>
        <div>Men</div>
        <div>Women</div>
        <div>Unisex</div>
      </section> */}
      <OrderSummary />
      <Promo />
      <Footer/>
    </motion.div>
  );
}
