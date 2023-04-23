import React from "react";
import styles from "./index.module.scss";
import { TextLarge, TextMedium } from "../../../../typography/";
import Line from "../../../Line";
import Button from "../../../../button";

function OrderHeader({ totalComplaints, ...props }) {
  return (
    <div className={`${styles.container} d-flex align-items-center`}>
      <Button type="plain" link="/order" className={`${styles.orders}`}>
        <TextMedium type={"md"} className="t-bold">
          Your Order
        </TextMedium>
      </Button>
      <Line className={`${styles._line}`} />
      <Button
        type="plain"
        link="/complaints"
        className={`${styles.complaints}`}
      >
        <TextMedium type={"md"} className="t-bold">
          Your Complaint ({totalComplaints || 2})
        </TextMedium>
      </Button>
    </div>
  );
}

export default OrderHeader;
