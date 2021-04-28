import React, { useContext, useState, useEffect } from "react";
import { BasketContext } from "../contexts/BasketContext";
import styles from "../styles/OrderSummary.module.css";
import Store from "store";

const incrementItemButton = ({ pid, scent, category }, setBasket, basket) => {
  let [itemInBasket] = basket.basket.filter((item) => item.pid == pid);
  itemInBasket.qty++;

  let newBasket = basket.basket
    .filter((i) => i.pid !== pid)
    .sort((a, b) => a.pid > b.pid);
  setBasket((prev) => ({
    basket: [...newBasket, itemInBasket].sort((a, b) => a.pid > b.pid),
  }));
};

const decrementItemButton = ({ pid, scent, category }, setBasket, basket) => {
  let [itemInBasket] = basket.basket.filter((item) => item.pid == pid);

  if (itemInBasket.qty == 1) {
    return false;
  } else {
    itemInBasket.qty--;
    let newBasket = basket.basket.filter((i) => i.pid !== pid);
    setBasket((prev) => ({
      basket: [...newBasket, itemInBasket].sort((a, b) => a.pid > b.pid),
    }));
  }
};

const clearItemButton = ({ pid, scent, category }, setBasket, basket) => {
  let [itemInBasket] = basket.basket.filter((item) => item.pid == pid);

  let newBasket = basket.basket.filter((i) => i.pid !== pid);

  setBasket((prev) => ({
    basket: [...newBasket],
  }));
};

const clearBasketButton = (setBasket) => {
  setBasket(() => ({
    basket: [],
  }));
};

export default function OrderSummary() {
  const { orderBasket, setOrderBasket } = useContext(BasketContext);
  const [basket, setBasket] = useState(orderBasket);

  useEffect(() => {
    basket.basket.sort((a, b) => a.pid > b.pid);
    Store.set("basket", basket);
    setOrderBasket(basket);
  }, [basket]);

  return (
    <div className={styles.container}>
      <button
        data-click={"hello"}
        onClick={(e) => clearBasketButton(setBasket)}
      >
        Empty basket
      </button>
      <ul>
        {basket.basket.sort((a, b) => a.pid > b.pid).map((i) => (
          <li key={Math.random(i.pid * 2)} className={styles.item}>
            <figure
              key={Math.random(i.pid * 2)}
              className={styles.bottle}
              data-bottle={i.category}
            ></figure>
            <div key={Math.random(i.pid * 2)} className={styles.description}>
              <h2>{i.pid}</h2>
              <p>{i.scent}</p>
            </div>
            <div className={styles.qty}>
              <div className={styles.counter}>
                <button
                  key={Math.random(i.pid * 2)}
                  className={styles.counterminus}
                  data-pid={i.pid}
                  data-scent={i.scent}
                  data-category={i.category}
                  onClick={(e) =>
                    decrementItemButton(e.target.dataset, setBasket, basket)
                  }
                >
                  —
                </button>
                <input
                  key={Math.random(i.pid * 2)}
                  type="text"
                  min="1"
                  aria-label="quantity"
                  pattern="[0-9]*"
                  className={styles.counterinput}
                  value={i.qty}
                  readOnly
                  disabled
                />
                <button
                  onClick={(e) =>
                    incrementItemButton(e.target.dataset, setBasket, basket)
                  }
                  className={styles.counteradd}
                  data-pid={i.pid}
                  data-scent={i.scent}
                  data-category={i.category}
                >
                  +
                </button>
              </div>
            </div>
            <p key={Math.random(i.pid * 2)} className={styles.price}>
              {i.qty * 55}AED
            </p>
            <button
              className={styles.clearitem}
              key={Math.random(i.pid * 2)}
              data-pid={i.pid}
              data-scent={i.scent}
              data-category={i.category}
              onClick={(e) =>
                clearItemButton(e.target.dataset, setBasket, basket)
              }
            >
              Ⅹ
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
