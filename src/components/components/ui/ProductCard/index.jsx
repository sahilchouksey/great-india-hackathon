import { ROUTES } from "../../../routes/data";
import Button from "../../button";
import { TextLarge, TextMedium, TextSmall } from "../../typography";
import styles from "./Card.module.scss";
export default function Product({
  name,
  description,
  category,
  price,
  image,
  id,
}) {
  const link = `${ROUTES.products}/${id}`;

  return (
    <>
      <Button
        link={link}
        type="plain"
        className={`no-text-decoration ${styles["ProductCard-body"]} d-flex align-items-center justify-content-center flex-column px-3 py-2`}
      >
        <img src={image} alt={`${category} image`}></img>
        <div
          className={`px-4 d-flex align-items-start justify-content-center flex-column ${styles["ProductCard-info"]}`}
        >
          <TextSmall
            type="md"
            className={`t-regular text-grey ${styles["in-category"]}`}
          >
            {category}
          </TextSmall>
          <TextMedium type={"lg"} className={`t-medium ${styles["in-Title"]}`}>
            {name}
          </TextMedium>

          <TextMedium
            type="sm"
            className={`t-regular my-2 ${styles["in-description"]}`}
          >
            {description}
          </TextMedium>
          <TextLarge
            type="md"
            className={`mb-4 t-semibold ${styles["in-price"]}`}
          >
            ₹ {price}
          </TextLarge>
        </div>
      </Button>
    </>
  );
}
