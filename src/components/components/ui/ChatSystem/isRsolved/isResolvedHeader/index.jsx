import React from "react";
import styles from "./index.module.scss";
import { TextLarge, TextMedium } from "../../../../typography/";
import Line from "../../../Line";

function OrderHeader({ totalComplaints, ...props }) {
  return (
    <div className={`${styles.container}`}>
      <button className={`${styles.orders}`}>
        <TextMedium type={"md"} className="t-bold">
          Your Order
        </TextMedium>
      </button>
      <Line className={`${styles._line}`} />
      <button className={`${styles.complaints}`}>
        <TextMedium type={"md"} className="t-bold">
          Your Complaint ({totalComplaints || 2})
        </TextMedium>
      </button>
    </div>
  );
}

export default OrderHeader;
