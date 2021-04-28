import Head from "next/head";
import Logo from "../components/Logo";
import Promo from "../components/sections/Promo";
import Menu from "../components/Menu";
import Basket from "../components/Basket";
import Cover from "../components/Cover";
import styles from "../styles/Unisex.module.css";
import "normalize.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Table from "../components/Table";

const products = [
  { pid: "TFBO", scent: "TOM FORD BLACK ORCHID", category: "unisex" },
  { pid: "BR", scent: "BACCRAT ROUGE", category: "unisex" },
  { pid: "OUD-GOI", scent: "GUCCI OUD INTENSE", category: "unisex" },
  { pid: "OUD-DGVD", scent: "D&G VELVET DESERT OUD", category: "unisex" },
];

export default function Men() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.container}
    >
      <Logo theme="dark" />
      <Menu theme="dark" />
      <Basket theme="dark" />
      <h1 className={styles.heading}>unisex</h1>
      <div className={styles.photo}></div>
      {/* <h1 className={styles.heading}>collection</h1> */}
      <h2 className={styles.subheading}>
        Scents inspired by branded fragrances
      </h2>
      <Table products={products.sort()} />
      <div className={styles.marketing}>
        <h2 className={styles.headline}>
          Quality doesn’t always need to be expensive
        </h2>
        <div className={styles.marketingbox}>
          <p className={styles.paragraph}>
            <span className={styles.price}>55AED</span>
            <h3 className={styles.hed}>Luxury quality, not luxury price</h3>
            All our perfume is at AED 55 per 75ml and you'll get an incredibly
            long lasting scent inspired by branded perfumes.
          </p>
          <figure className={styles.figure}>
            <img src="/static/bottle-unisex.png" />
          </figure>
        </div>
      </div>

      <Promo />
    </motion.div>
  );
}
