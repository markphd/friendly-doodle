import Head from "next/head";
import Logo from "../components/Logo";
import Promo from "../components/sections/Promo";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Basket from "../components/Basket";
import styles from "../styles/Women.module.css";
import "normalize.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Table from "../components/Table";

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

const products = [
  { pid: "W-ALN", scent: "THIERRY MUGLER ALIEN", category: "women" },
  { pid: "W-CCM", scent: "CHANEL COCO MADEMOISELLE", category: "women" },
  { pid: "W-CC", scent: "CHANEL CHANCE (GREEN)", category: "women" },
  { pid: "W-CHGG", scent: "CAROLINA HERRERA GOOD GIRL", category: "women" },
  { pid: "W-NRN", scent: "NARCISO RODRIGUEZ 'NARCISO'", category: "women" },
  {
    pid: "W-JMEP",
    scent: "JO MALONE ENGLISH PEAR AND FREESIA",
    category: "women",
  },
  { pid: "W-CH", scent: "CLINIQUE HAPPY", category: "women" },
  { pid: "W-DJ", scent: "DIOR J'ADORE", category: "women" },
  { pid: "W-FIC", scent: "FERRAGAMO INCANTO CHARMS", category: "women" },
  { pid: "W-GG", scent: "GUCCI GUILTY", category: "women" },
  { pid: "W-KF", scent: "KENZO FLOWER", category: "women" },
  { pid: "W-LLB", scent: "LANCOME LA VIE EST BELLE", category: "women" },
  { pid: "W-LE", scent: "LANVIN ECLAT", category: "women" },
  { pid: "W-VBC", scent: "VERSACE BRIGHT CRYSTAL", category: "women" },
  { pid: "W-VSB", scent: "VICTORIA SECRET BOMBSHELL", category: "women" },
  { pid: "W-YBO", scent: "YSL BLACK OPIUM", category: "women" },
  { pid: "W-YMP", scent: "YSL MON PARIS", category: "women" },
  { pid: "W-MJD", scent: "MARC JACOBS DAISY", category: "women" },
];

export default function Women() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0, transition: { duration: 0.3, ease: easing }, }}
      animate={{ opacity: 1,transition: { duration: 1.5, ease: easing }, }}
      className={styles.container}
    >
      <Logo theme="light" />
      <Menu theme="light" />
      <Basket theme="light" />
      {/* <div className={styles.marketingstrip}>
        <h2 className={styles.subheading}>
          Scents inspired by branded fragrances
        </h2>
      </div> */}
      <h1 className={styles.heading}>women</h1>

      {/* <div className={styles.highlight}>
        <span className={styles.price}>55AED</span>
        <span className={styles.price}>75ML</span>
      </div> */}
      <div className={styles.marketingstrip}>
        <h2 className={styles.subheading}>
          <span className={styles.symbol}>●</span> All our perfume is at AED 55
          per 75ml and you'll get an incredibly long lasting scent
        </h2>
      </div>

      {/* <div className={styles.highlight}>
        <span className={styles.price}>55AED</span>
        <span className={styles.price}>75ML</span>
      </div> */}

      <Table products={products} />
      <Promo />
      {/* <div className={styles.marketing}>
        <h2 className={styles.subheading}>We bring the shop to you</h2>
        <div className={styles.marketingbox}>
          <span className={styles.price}>55AED</span>
          <h3 className={styles.hed}>Luxury quality, not luxury price</h3>
          <p className={styles.paragraph}>
            All our perfume is at AED 55 per 75ml and you'll get an incredibly
            long lasting scent inspired by branded perfumes.
          </p>
          <figure className={styles.figure}>
            <img src="/static/bottle-women.png" />
          </figure>
        </div>
      </div> */}
      <Footer />
    </motion.div>
  );
}
