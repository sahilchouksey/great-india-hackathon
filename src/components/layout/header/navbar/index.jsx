import Button from "../../../button";
import { TextExtraLarge, TextLarge } from "../../../typography";
import Cart from "./components/cart";
import Menu from "./components/menu";
import Search from "./components/search";
import styles from "./navbar.module.scss";
export default function Navbar() {
  return (
    <nav
      className={`d-flex justify-content-between align-items-center ${styles.navbar}`}
    >
      <Button link="/" className={`no-text-decoration ${styles.logo}`}>
        <TextExtraLarge type="sm" className="t-semibold">
          Azure Store
        </TextExtraLarge>
      </Button>
      <ul
        className={`d-flex align-items-center justify-content-center ${styles["navbar--list"]}`}
      >
        <li className={styles["navbar--item"]}>
          <Search />
        </li>
        <li className={styles["navbar--item"]}>
          <Cart />
        </li>
        <li className={styles["navbar--item"]}>
          <Menu />
        </li>
      </ul>
    </nav>
  );
}
