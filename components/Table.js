import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Table.module.css";
import { BasketContext } from "../contexts/BasketContext";
import Store from "store";

const addToBasket = ({ pid, scent, category }, setBasket, basket) => {
  const [itemInBasket] = basket.basket.filter((item) => item.pid == pid);

  if (!itemInBasket) {
    //initialize item in basket
    setBasket((prev) => ({
      basket: [...prev.basket, { pid, scent, category, qty: 1 }],
    }));
  } else {
    //if item is already added, remove from basket
    itemInBasket.qty++;

    if (basket.basket.length > 0) {
      let newBasket = basket.basket.filter((i) => i.pid !== pid);
      setBasket((prev) => ({
        basket: [...newBasket, itemInBasket],
      }));
    } else {
      setBasket((prev) => ({
        basket: [...prev.basket, itemInBasket],
      }));
    }
  }
};

export default function Table({ products }) {
  const { orderBasket, setOrderBasket } = useContext(BasketContext);
  const [basket, setBasket] = useState(orderBasket);

  useEffect(() => {
    Store.set("basket", basket);
    setOrderBasket(basket);
  }, [basket]);
  return (
    <div className={styles.container}>
      <div className={styles.tableheading}>
        <h3>If you like:</h3>
        <h3>Try:</h3>
      </div>
      <div>
        {products.map((product) => (
          <div className={styles.productitem} key={Math.random(product.pid)}>
            <p className={styles.scent} key={Math.random(product.pid)}>
              {product.scent}
              <span className={styles.symbol}> ● </span>
            </p>
            <p className={styles.pid} key={Math.random(product.pid)}>
              {product.pid}
            </p>
            <button
              className={styles.cta}
              onClick={() => addToBasket(product, setBasket, basket)}
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
