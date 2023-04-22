import { useSelector, useDispatch } from "react-redux";
import { TextExtraLarge } from "../../components/typography";
import CartItem from "../../components/ui/CartItem";
import CartComponent from "../../components/ui/Cart";

export default function Cart() {
  const { cart } = useSelector((state) => state.user);

  const styles = {};

  let totalItems = 0;
  const totalPrice = cart.reduce((p, c) => {
    totalItems += c.quantity;
    return p + c.price * c.quantity;
  }, 0);

  return (
    <div className={styles.Cart}>
      <TextExtraLarge type="sm" className={"t-bold"}>
        Cart
      </TextExtraLarge>
      <CartComponent totalItems={totalItems} totalPrice={totalPrice}>
        {cart.map((item) => (
          <CartItem
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
            image={item.image}
            key={item.id}
          ></CartItem>
        ))}
      </CartComponent>
    </div>
  );
}
