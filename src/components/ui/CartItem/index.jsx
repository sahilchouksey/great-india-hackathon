import React, { useState } from "react";
import styles from "./CartItem.module.scss";
import Button from "../../button";
import { Form, InputGroup } from "react-bootstrap";
import { TextMedium } from "../../typography";
function Inddex() {
  const [count, setCount] = useState(1);
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles["main-container"]}>
      <div className={styles["component-body"]}>
        <div className={styles["first"]}>
          <div className="img_product_details d-flex justify-content-start align-items-start">
            <span className={styles["img"]}>
              <img
                src="./images/image 13.png"
                className={styles["product-image"]}
              />
            </span>
            <span className={styles["product-info"]}>
              <TextMedium
                type="lg"
                className={`t-regular ${styles["Product-sellerInfo"]}  `}
              >
                Asus Ryzon 7 Quad Core CP...
              </TextMedium>
              <TextMedium
                type="sm"
                className={`t-regular text-grey ${styles["Product-BasicInfo"]} mt-2 `}
              >
                15.6 inch, gray, with MS Office
              </TextMedium>
              <TextMedium
                type="lg"
                className={`t-regular text-black${styles["Price"]} mt-3`}
              >
                $94
              </TextMedium>
            </span>
          </div>
          <TextMedium
            type="lg"
            className={`text-mixed t-black ${styles["free"]}`}
          >
            Delivery by Today | <span className={styles["green"]}>free</span>
          </TextMedium>
        </div>
        <div
          className={`d-flex align-items-center justify-content-start ${styles["second"]}`}
        >
          <div className={`ms-3 ${styles["buttons"]}`}>
            <span className={styles["button"]}>
              <Button type="plain" onClick={decrement}>
                -
              </Button>
            </span>

            {/* <Form.Control
                className={`${styles["button-count"]}`}
                placeholder="0"
                aria-label="0"
                value={count}
                type="number"
                min={1}
              /> */}
            <Button type="plain" className={`ms-3 ${styles["button-count"]}`}>
              {count}
            </Button>
            <span className={`ms-3 ${styles["button"]}`}>
              <Button type="plain" onClick={() => setCount(count + 1)}>
                +
              </Button>
            </span>
          </div>
          <TextMedium type="lg" className={`text-semibold ${styles["remove"]}`}>
            <Button type="plain">Remove</Button>
          </TextMedium>
        </div>
      </div>
    </div>
  );
}

export default Inddex;
