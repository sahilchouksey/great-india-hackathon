import { useSelector } from "react-redux";
import CartIcon from "../../../../../assets/icons/cart";
import Button from "../../../../button";
import { TextMedium } from "../../../../typography";

import styles from "../navbar.module.scss";

export default function Cart() {
  const user = useSelector((state) => state.user);
  const totalProducts = user?.cart?.length;

  return (
    <Button
      link={"/cart"}
      type="plain"
      className={`d-flex align-items-center justify-content-center ${styles.Cart}`}
    >
      <CartIcon className={styles.Cart_Icon} />
      <TextMedium type="sm" className={`t-bold ${styles.Cart_TotalProds}`}>
        {totalProducts || 0}
      </TextMedium>
    </Button>
  );
}
