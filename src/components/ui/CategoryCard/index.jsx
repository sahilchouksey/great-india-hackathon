import styles from "./CategoryCard.module.scss";
import { TextMedium } from "../../typography";
import { Image } from "react-bootstrap";
import Button from "../../button";
import { ROUTES } from "../../../routes/data";

export default function CategoryCard({ id, image, title }) {
  const link = `${ROUTES.categories}/${id}`;
  return (
    <Button
      link={link}
      type="plain"
      className={`${styles.CategoryCard} d-flex flex-column align-items-center no-text-decoration `}
    >
      <Image className={styles["CategoryCard--image"]} src={image} />
      <div
        className={`d-flex flex-align-center justify-content-center align-items-center ${styles["CategoryCard--text-container"]}`}
      >
        <TextMedium
          className={`t-medium ${styles["CategoryCard--text"]}`}
          type="sm"
        >
          {title}
        </TextMedium>
      </div>
    </Button>
  );
}
