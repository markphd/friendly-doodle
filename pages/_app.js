import { useState } from "react";
import { BasketContext } from "../contexts/BasketContext";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.css";
import Store from "store";

function MyApp({ Component, pageProps }) {
  let basket =
    Store.get("basket") !== undefined ? Store.get("basket") : { basket: [] };

  const [orderBasket, setOrderBasket] = useState(basket);

  const value = {
    orderBasket,
    setOrderBasket,
    basket,
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <BasketContext.Provider value={value}>
        <Component {...pageProps} />
      </BasketContext.Provider>
    </AnimatePresence>
  );
}

export default MyApp;
