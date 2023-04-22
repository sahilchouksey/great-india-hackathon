import Container from "./container";
import styles from "./styles/layout.module.scss";

const Layout = (props) => {
  return (
    <Container>
      <div className={styles.layout}>{props.children}</div>
    </Container>
  );
};
export default Layout;
