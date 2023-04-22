import { Image } from "react-bootstrap";
import { ROUTES } from "../../../routes/data";
import Button from "../../button";
import { TextLarge, TextMedium } from "../../typography";
import CategoryCard from "../CategoryCard";
import ProductCard from "../ProductCard";
import styles from "./showcase.module.scss";

export default function Showcase({
  title,
  type,
  items,
  link,
  hideShowAll = false,
  containerClassName,
}) {
  let content;
  if (type == "categories") {
    content = items.map((i) => (
      <CategoryCard key={i.id} id={i.id} title={i.title} image={i.image} />
    ));
    if (!link) {
      link = ROUTES.categories;
    }
  } else if (type == "products") {
    content = items.map((i) => (
      <ProductCard
        id={i.id}
        name={i.name}
        description={i.description}
        image={i.image}
        price={i.price}
        category={i.category}
        key={i.id}
      />
    ));
    if (!link) {
      link = ROUTES.products;
    }
  }
  return (
    <div className={containerClassName || ""}>
      <div
        className={`${styles["showcase--header"]} d-flex justify-content-between`}
      >
        <TextLarge type="lg" className="t-semibold">
          {title}
        </TextLarge>
        {!hideShowAll && (
          <Button
            link={link}
            defaultButton
            type="primary"
            className={"py-3 px-4"}
          >
            <TextMedium type="lg" className={"t-semibold"}>
              See All
            </TextMedium>
          </Button>
        )}
      </div>
      <div className={`${styles["showcase--content"]} mt-4 align-items-center`}>
        {content}
      </div>
    </div>
  );
}
