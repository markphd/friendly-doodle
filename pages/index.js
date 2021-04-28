import Head from "next/head";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Basket from "../components/Basket";
import Cover from "../components/Cover";
import styles from "../styles/Home.module.css";
import "normalize.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.container}
    >
      <Head>
        <title>
          PROJECT SCENTS Ⓡ － Affordable alternative to your favorite branded
          perfume
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <Logo theme="light" />
      <Basket count={10} />

      <main className={styles.main}>
        <Cover />
        {/* <h1 className={styles.title}>
          <a href="https://projectscents.com">
            PROJECT SCENTS
            <span className={styles.registered}></span>
          </a>
        </h1>
        <p className={styles.description}>
          Affordable alternative to your favorite branded perfume
        </p> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright {new Date().getFullYear()} － All rights reserved
        </a>
      </footer> */}
    </motion.div>
  );
}
