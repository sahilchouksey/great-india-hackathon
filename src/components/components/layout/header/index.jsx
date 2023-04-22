import styles from "./header.module.scss";

import Navbar from "./navbar";
export default function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  );
}
