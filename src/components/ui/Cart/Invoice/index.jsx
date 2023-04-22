import { TextMedium, TextSmall } from "../../../typography";
import styles from "./invoice.module.scss";

// sm, md, lg
import Line from "../../Line";
export default function Invoice({ totalPrice, totalItems }) {
  return (
    <div className={`ms-3 ${styles.container}`}>
      <div className={`${styles.header}`}>
        <TextMedium className={"uppercase t-bold"} type={"md"}>
          Price Details
        </TextMedium>
      </div>
      <Line className={styles.Line} />
      <div className={`${styles.body}`}>
        <div className={`${styles.bodyItem}`}>
          <TextSmall type={"md"}>Price ({totalItems} item)</TextSmall>
          <TextSmall type={"md"}>{totalPrice}</TextSmall>
        </div>
        <div className={`${styles.bodyItem}`}>
          <TextSmall type={"md"}>Delivery Charges</TextSmall>
          <TextSmall type={"md"} className={styles.leftText}>
            Free
          </TextSmall>
        </div>
      </div>
      <Line className={styles.Line} />
      <div className={`${styles.footer}`}>
        <TextSmall type={"md"}>Total Amount</TextSmall>
        <TextSmall type={"md"}>$1500</TextSmall>
      </div>
      <Line className={styles.Line} />
    </div>
  );
}
