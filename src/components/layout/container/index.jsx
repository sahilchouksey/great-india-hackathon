import { forwardRef, memo } from "react";
import Header from "../header";
import styles from "./container.module.scss";

const Container = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      {/* <Header /> */}
      {props.children}
    </div>
  );
});

export default Container;
