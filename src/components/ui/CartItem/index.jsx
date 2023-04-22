import React, { useState } from "react";
import styles from "./CartItem.module.scss";
import Button from "../../button";
import { TextLarge, TextMedium } from "../../typography";
import { Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCartItem } from "../../../store/user/slice";
function CartItem({ id, name, description, price, quantity, image }) {
  const dispatch = useDispatch();

  const updateQuantity = (e, type) => {
    const JUMPBY = 1;
    const data = {
      id: id,
      increment: type == "increment",
      decrement: type == "decrement",
      quantity: JUMPBY,
    };

    dispatch(updateCartItem(data));
  };

  const removeProduct = () => {
    const data = {
      id: id,
    };
    dispatch(removeFromCart(data));
  };

  return (
    <div className={`mt-3 ${styles["main-container"]}`}>
      <div className={styles["component-body"]}>
        <div className={styles["first"]}>
          <div className="img_product_details d-flex justify-content-start align-items-start">
            <span className={styles["img"]}>
              <Image src={image} className={styles["product-image"]} />
            </span>
            <span className={styles["product-info"]}>
              <TextMedium
                type="lg"
                className={`t-regular ${styles["Product-sellerInfo"]}  `}
              >
                {name}
              </TextMedium>
              <TextMedium
                type="sm"
                className={`t-regular text-grey ${styles["Product-BasicInfo"]} mt-2 `}
              >
                {description}
              </TextMedium>
              <TextMedium
                type="lg"
                className={`t-regular text-black${styles["Price"]} mt-3`}
              >
                {price}
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
              <Button
                type="plain"
                onClick={(e) => updateQuantity(e, "decrement")}
                disabled={quantity == 1}
              >
                <TextMedium
                  type={"lg"}
                  className={
                    "t-regular d-flex align-items-center justify-content-center"
                  }
                >
                  -
                </TextMedium>
              </Button>
            </span>

            <Button type="plain" className={`ms-3 ${styles["button-count"]}`}>
              {quantity}
            </Button>
            <span className={`ms-3 ${styles["button"]}`}>
              <Button
                type="plain"
                onClick={(e) => updateQuantity(e, "increment")}
              >
                <TextMedium
                  type={"lg"}
                  className={
                    "t-regular d-flex align-items-center justify-content-center"
                  }
                >
                  +
                </TextMedium>
              </Button>
            </span>
          </div>
          <TextMedium type="lg" className={`text-semibold ${styles["remove"]}`}>
            <Button type="plain" onClick={removeProduct}>
              <TextMedium type="md" className={"t-bold"}>
                Remove
              </TextMedium>
            </Button>
          </TextMedium>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
