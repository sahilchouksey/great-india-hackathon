import { Offcanvas } from "react-bootstrap";
import { ROUTES } from "../../../../../routes/data";
import Button from "../../../../button";
import { TextExtraLarge, TextLarge, TextMedium } from "../../../../typography";

import HomeIcon from "../../../../../assets/icons/home";
import CategoryIcon from "../../../../../assets/icons/category";
import OrderIcon from "../../../../../assets/icons/order";
import ComplainIcon from "../../../../../assets/icons/contact";
import ProductIcon from "../../../../../assets/icons/product";

import styles from "../navbar.module.scss";

function MenuItemsHeader() {
  return (
    <div className={`d-flex align-items-center justify-content-center `}>
      <TextLarge type="md" className={`t-semibold`}>
        Hello!
      </TextLarge>
      <Button
        link={ROUTES.login}
        type="primary"
        className={`${styles["Menu__cta"]} ${styles["Menu__btn_login"]} ms-4`}
        defaultButton
      >
        <TextMedium type="lg" className={"t-bold"}>
          Login
        </TextMedium>
      </Button>
    </div>
  );
}

function MenuItemsContentItem({ Icon, text, link, onClick }) {
  return (
    <li className={styles.Backdrop_content_list_item}>
      <Button
        link={link}
        className={`${styles["Menu__cta"]} ${styles.Backdrop_content_list_item_link} d-flex align-items-center justify-content-start `}
        onClick={(e) => {
          e.stopPropagation();
          console.log(onClick, typeof onClick);
          onClick();
        }}
      >
        <Icon />
        <TextMedium
          type="md"
          className={`t-semibold ${styles.Backdrop_content_list_item_text} ms-3`}
        >
          {text}
        </TextMedium>
      </Button>
    </li>
  );
}
function MenuItemsContentList({ title, ...props }) {
  return (
    <div
      className={`${
        styles.Backdrop_content_list_container
      } w-100 d-flex flex-column align-items-start ${props.className || ""}`}
    >
      {title && (
        <TextMedium type="sm" className={"t-semibold ps-4 mb-3"}>
          {title}
        </TextMedium>
      )}
      <ul className={`w-100 ${styles.Backdrop_content_list}`}>
        {props.children}
      </ul>
    </div>
  );
}
function MenuItemsContent({ onClose }) {
  return (
    <div
      className={`d-flex align-items-center justify-content-start flex-column `}
    >
      <MenuItemsContentList>
        <MenuItemsContentItem
          Icon={HomeIcon}
          text="Home"
          link={ROUTES.home}
          onClick={onClose}
        />
        <MenuItemsContentItem
          Icon={ProductIcon}
          text="All Products"
          link={ROUTES.products}
          onClick={onClose}
        />
        <MenuItemsContentItem
          Icon={CategoryIcon}
          text="Shop By Category"
          link={ROUTES.categories}
          onClick={onClose}
        />
      </MenuItemsContentList>
      <MenuItemsContentList title="My Account" className={"mt-3"}>
        <MenuItemsContentItem
          Icon={OrderIcon}
          text="My Orders"
          link={ROUTES.orders}
          onClick={onClose}
        />
        <MenuItemsContentItem
          Icon={ComplainIcon}
          text="My Complains"
          link={ROUTES.complains}
          onClick={onClose}
        />
      </MenuItemsContentList>
    </div>
  );
}

export default function MenuItems({ onClose }) {
  return (
    <>
      <Offcanvas.Header
        className={`d-flex align-items-center justify-content-between px-5 ${styles["Backdrop_header"]}`}
        closeButton
      >
        <Offcanvas.Title>
          <MenuItemsHeader />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <MenuItemsContent onClose={onClose} />
      </Offcanvas.Body>
    </>
  );
}
