import { useDispatch } from "react-redux";
import styles from "../styles.module.scss";
import {
  TextExtraLarge,
  TextLarge,
  TextMedium,
  TextSmall,
} from "../../typography";
import Button from "../../button";
import Line from "../../ui/Line";

import CartIcon from "../../../assets/icons/cart";
import Showcase from "../../../components/ui/showcase";
import { addToCart } from "../../../store/user/slice";
import { generateRandomId } from "../../../lib/functions";

const trustTexts = [
  {
    id: 1,
    text: "100% Original Products",
  },
  {
    id: 2,
    text: "Pay on delivery might be available",
  },
  {
    id: 3,
    text: "Easy 14 Days returns",
  },
  {
    id: 4,
    text: "this item is only returnable not exchangeble",
  },
];

// component responsible for adding items to cart
const AddToCart = ({ product }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const cartItem = {
      id: product?._id,
      image: product?.images?.[0]?.src,
      name: product?.name,
      description: product?.description,
      price: product?.price,
    };
    console.log(product);
    dispatch(addToCart(cartItem));
  };

  return (
    <Button
      type="primary"
      onClick={addItemToCart}
      className={`${styles.Product_btn} ${styles.Product_btn_addToCart} mt-4 py-3 `}
    >
      <div className="d-flex align-items-center justify-content-center">
        <CartIcon className={`${styles.Product_btn_addToCart_icon} me-3`} />
        <TextMedium type={"lg"} className="t-bold">
          Add to cart
        </TextMedium>
      </div>
    </Button>
  );
};

export default function ProductHeader({ product }) {
  return (
    <>
      <div
        className={`${styles.Product_header} d-flex flex-column justify-content-start`}
      >
        <TextMedium type="md" className="t-regular text-grey">
          {product?.category?.name}
        </TextMedium>
        <TextLarge type="md" className="t-semibold mt-2">
          {product?.name}
        </TextLarge>

        <TextExtraLarge type="sm" className="t-bold mt-3 text-primary">
          ₹ {product?.price}
        </TextExtraLarge>

        <TextSmall type="md" className="t-regular mt-1">
          including all taxes
        </TextSmall>

        <AddToCart product={product} />
      </div>
      <Line />
      <div
        className={`${styles.Product_trust} d-flex flex-column justify-content-start mt-4`}
      >
        {trustTexts?.length &&
          trustTexts.map((text) => {
            return (
              <TextSmall key={text.id} type="md" className="t-regular mt-1">
                {text.text}
              </TextSmall>
            );
          })}
      </div>
      <Line />
      <div
        className={`${styles.Product_details} d-flex flex-column justify-content-start mt-4`}
      >
        <TextLarge type="md" className="t-medium mt-2">
          Product Details
        </TextLarge>
        <TextMedium type="sm" className={"t-regular mt-4"}>
          {product?.details}
        </TextMedium>
      </div>
      <Line />
    </>
  );
}
