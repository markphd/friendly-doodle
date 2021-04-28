import Head from "next/head";
import Logo from "../components/Logo";
import Promo from "../components/sections/Promo";
import Menu from "../components/Menu";
import Basket from "../components/Basket";
import Cover from "../components/Cover";
import styles from "../styles/Men.module.css";
import "normalize.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Table from "../components/Table";

const products = [
  { pid: "M-ADGPC", scent: "ACQUA DI GIO PROFUMO (CLASSIC)", category: "men" },
  {
    pid: "M-ADGPO",
    scent: "ACQUA DI GIO PROFUMO (90's formulation)",
    category: "men",
  },
  { pid: "M-BDC", scent: "BLUE DE CHANEL 2010", category: "men" },
  { pid: "M-DHI", scent: "DIOR HOMME INTENSE", category: "men" },
  { pid: "M-DS", scent: "DIOR SAUVAGE", category: "men" },
  { pid: "M-VE", scent: "VERSACE EROS", category: "men" },
  { pid: "M-VRSP", scent: "VIKTOR ROLF SPICEBOMB", category: "men" },
  { pid: "M-DG1", scent: "D&G THE ONE", category: "men" },
  { pid: "M-HBE", scent: "HUGO BOSS EXTREME", category: "men" },
  { pid: "M-IM", scent: "ISSEY MIYAKE", category: "men" },
  { pid: "M-LW", scent: "LACOSTE WHITE", category: "men" },
  { pid: "M-1MIL", scent: "PACO RABANNE 1 MILLION", category: "men" },
  { pid: "M-CKE", scent: "CALVIN KLEIN ETERNITY", category: "men" },
  { pid: "M-YLI", scent: "YSL L'HOMME INTENSE", category: "men" },
  { pid: "M-TFF", scent: "TOM FORD F.FABULOUS", category: "men" },
  { pid: "M-MB", scent: "BURBERRY MR. BURBERRY", category: "men" },
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
      <h1 className={styles.heading}>men</h1>
      <div className={styles.photo}></div>
      {/* <h1 className={styles.heading}>collection</h1> */}
      <h2 className={styles.subheading}>
        Scents inspired by branded fragrances
      </h2>
      <Table products={products} />
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
            <img src="/static/bottle-women.png" />
          </figure>
        </div>
      </div>

      <Promo />
    </motion.div>
  );
}
