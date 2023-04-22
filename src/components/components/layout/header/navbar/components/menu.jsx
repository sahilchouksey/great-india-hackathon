import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import BurgerIcon from "../../../../../assets/icons/burger";
import Button from "../../../../button";

import styles from "../navbar.module.scss";
import MenuItems from "./menuItems";
export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    console.log("burger clicked");
    setShowMenu(true);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <>
      <Button
        type="plain"
        onClick={openMenu}
        className={`d-flex align-items-center justify-content-center ${styles.Menu}`}
      >
        <BurgerIcon className={styles.Menu_Icon} />
      </Button>

      <Offcanvas show={showMenu} onHide={closeMenu}>
        <MenuItems onClose={closeMenu} />
      </Offcanvas>
    </>
  );
}
