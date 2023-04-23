import React from "react";
import Inddex from "../CartItem";

import styles from "./Cart.module.scss";
import Button from "../../button";
import Invoice from "./Invoice";

function CartComponent({ children, totalPrice, totalItems, onOrder }) {
  return totalItems ? (
    <div className="d-flex align-items-start justify-content-between">
      <div className={styles["container"]}>
        <div className={styles["Cart-container"]}>
          <div className={styles["orders"]}>{children}</div>
        </div>
        <div
          className={`d-flex align-items-center justify-content-end pe-3 ${styles["Place-container"]}`}
        >
          <Button type="primary" className={styles["Place"]} onClick={onOrder}>
            Place Order
          </Button>
        </div>
      </div>
      <Invoice totalItems={totalItems} totalPrice={totalPrice} />
    </div>
  ) : null;
}

export default CartComponent;
