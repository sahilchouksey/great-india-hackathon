import { useSelector, useDispatch } from "react-redux";
import { TextExtraLarge } from "../../components/typography";
import CartItem from "../../components/components/ui/CartItem";

export default function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const styles = {};
  return (
    <div className={styles.Cart}>
      <TextExtraLarge type="sm" className={"t-bold"}>
        Cart
      </TextExtraLarge>
      {cart.map((item) => (
        <CartItem key={item.id}></CartItem>
      ))}
    </div>
  );
}
