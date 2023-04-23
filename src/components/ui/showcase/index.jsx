import { Image } from "react-bootstrap";
import { ROUTES } from "../../../routes/data";
import Button from "../../button";
import { TextLarge, TextMedium } from "../../typography";
import CategoryCard from "../CategoryCard";
import ProductCard from "../ProductCard";
import Loading from "../Loading";
import styles from "./showcase.module.scss";

export default function Showcase({
  title,
  type,
  items,
  link,
  hideShowAll = false,
  containerClassName,
  isLoading,
  error,
}) {
  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (type == "categories") {
    content = items.map((i) => (
      <CategoryCard key={i._id} id={i._id} name={i.name} image={i.image} />
    ));
    if (!link) {
      link = ROUTES.categories;
    }
  } else if (type == "products") {
    content = items.map((i) => (
      <ProductCard
        id={i._id}
        name={i.name}
        description={i?.description}
        images={i?.images}
        price={i?.price}
        category={i?.category?.name}
        key={i._id}
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
        {items?.length == 0 && error && (
          <div className="d-flex justify-content-center align-items-center">
            <TextLarge type="lg" className="t-semibold text-danger">
              No items found
            </TextLarge>
          </div>
        )}
        {content}
      </div>
    </div>
  );
}
