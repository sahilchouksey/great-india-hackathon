import React from "react";
import Inddex from "../CartItem";

import styles from "./Cart.module.scss";
import Button from "../../button";
import Invoice from "./Invoice";

function Outer() {
  return (
    <div className="d-flex align-items-start justify-content-between">
      <div className={styles["container"]}>
        <div className={styles["Cart-container"]}>
          <div className={styles["orders"]}>
            <Inddex></Inddex>
          </div>
          <div className={styles["orders"]}>
            <Inddex></Inddex>
          </div>
        </div>
        <Button type="primary" className={styles["Place"]}>
          Place Order
        </Button>
      </div>
      <Invoice />
    </div>
  );
}

export default Outer;
