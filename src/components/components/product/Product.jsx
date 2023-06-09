import {
  TextExtraLarge,
  TextLarge,
  TextMedium,
  TextSmall,
} from "../../components/typography";
import Line from "../../components/ui/Line";
import Button from "../../components/button";

import styles from "./styles.module.scss";
import CartIcon from "../../assets/icons/cart";
import { useState } from "react";
import Showcase from "../../components/ui/showcase";

function RatingBar({ progress, color }) {
  return (
    <div
      className={`d-flex justify-content-start align-items-center ${styles.Product_reviews_progress} `}
    >
      <div
        style={{ width: `${progress}%` }}
        className={` bg-${color} ${styles.Product_reviews_progress_line}`}
      ></div>
    </div>
  );
}

const defaultRatingObject = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
};
const defaultRatingsColors = {
  5: "success",
  4: "success",
  3: "success",
  2: "warn",
  1: "danger",
};
function RatingBars({ ratings }) {
  const allRatings = { ...defaultRatingObject };
  ratings.forEach((r) => {
    if (!allRatings[r.rating]) allRatings[r.rating] = [];
    allRatings[r.rating].push(r);
  });

  const ratingNumbers = Object.keys(allRatings)
    .reverse()
    .map((key) => {
      return (
        <div
          key={key}
          type="md"
          className={` d-flex justify-content-between align-items-center ${styles.Product_reviews_progress_placeholder}`}
        >
          <TextSmall type="md" className={"t-bold"}>
            {key}
          </TextSmall>{" "}
          <TextSmall type="md" className={"t-bold text-black px-2"}>
            ★
          </TextSmall>
        </div>
      );
    });

  const ratingBar = Object.keys(allRatings)
    .reverse()
    .map((key) => {
      const totalRatingCount = allRatings[key]?.length;
      const progress = 100 / (ratings.length / totalRatingCount)
      
      return (
        <RatingBar
          key={`${key}-${totalRatingCount}`}
          rating={key}
          color={defaultRatingsColors[key]}
          progress={progress}
        />
      );
    });
  return (
    <div
      className={`mt-5 w-100 d-flex align-items-center justify-content-start ${styles.Product_reviews_progress_container}`}
    >
      {/* ratings numbers 1,2,3,4,5 */}
      <div className="d-flex align-items-start justify-content-center flex-column">
        {ratingNumbers}
      </div>
      {/* rating bars */}
      <div className="d-flex align-items-start justify-content-center flex-column">
        {ratingBar}
      </div>
    </div>
  );
}

function Review({ rating, review }) {
  return (
    <>
      <div
        className={`w-100 d-flex align-items-center justify-content-start mt-4 p-2 ${styles.Product_review_container}`}
      >
        <div
          className={`d-flex p-2 align-items-center justify-content-center ${styles.Product_review_rating} bg-${defaultRatingsColors[rating]}`}
        >
          <TextSmall type="md" className={`t-bold text-white`}>
            ★
          </TextSmall>

          <TextSmall type="md" className={`t-bold text-white ms-1`}>
            {rating}
          </TextSmall>
        </div>
        <div className={`ms-5 ${styles.Product_review}`}>
          <TextMedium type="sm" className={"t-regular"}>
            {review}
          </TextMedium>
        </div>
      </div>
      <Line />
    </>
  );
}

const TOTAL_MINIMIZE_REVIEWS = 3;
function Reviews({ reviews }) {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const toggleShowAllReviews = () => {
    setShowAllReviews((prevState) => {
      return !prevState;
    });
  };

  const allReviews = reviews.map((review) => {
    return (
      <Review key={review.id} rating={review.rating} review={review.review} />
    );
  });

  const lessReviews = allReviews.slice(0, TOTAL_MINIMIZE_REVIEWS);

  let showingReviews = allReviews;
  if (!showAllReviews) {
    showingReviews = lessReviews;
  }
  console.log(allReviews);
  return (
    <>
      <TextLarge type="md" className={"t-medium mt-3"}>
        Reviews
      </TextLarge>
      <div
        className={`d-flex align-items-start flex-column justify-content-center ${styles.Product_reviews_container}`}
      >
        {showingReviews}
      </div>
      <Button
        className={`my-3 px-3 py-3 ${styles.Product_review_seeAll_btn}`}
        onClick={toggleShowAllReviews}
        type="secondary"
      >
        {showAllReviews ? "LESS" : "Show more reviews"}
      </Button>
    </>
  );
}

export default function ProductDetails({ product }) {
  return (
    <div className={styles.Product}>
      <div
        className={`${styles.Product_header} d-flex flex-column justify-content-start`}
      >
        <TextMedium type="md" className="t-regular text-grey">
          {product.category}
        </TextMedium>
        <TextLarge type="md" className="t-semibold mt-2">
          {product.title}
        </TextLarge>

        <TextExtraLarge type="sm" className="t-bold mt-3 text-primary">
          ₹ {product.amount}
        </TextExtraLarge>

        <TextSmall type="md" className="t-regular mt-1">
          including all taxes
        </TextSmall>

        <Button
          type="primary"
          className={`${styles.Product_btn} ${styles.Product_btn_addToCart} mt-4 py-3 `}
        >
          <div className="d-flex align-items-center justify-content-center">
            <CartIcon className={`${styles.Product_btn_addToCart_icon} me-3`} />
            <TextMedium type={"lg"} className="t-bold">
              Add to cart
            </TextMedium>
          </div>
        </Button>
      </div>
      <Line />
      <div
        className={`${styles.Product_trust} d-flex flex-column justify-content-start mt-4`}
      >
        {product.trustTexts?.length &&
          product.trustTexts.map((text) => {
            return (
              <TextSmall key={text.id} type="md" className="t-regular mt-1">
                {text.text}
              </TextSmall>
            );
          })}
      </div>
      <Line />
      <div
        className={`${styles.Product_details} d-flex flex-column justify-content-start mt-4`}
      >
        <TextLarge type="md" className="t-medium mt-2">
          Product Details
        </TextLarge>
        <TextMedium type="sm" className={"t-regular mt-4"}>
          {product.productDetails}
        </TextMedium>
      </div>
      <Line />
      <div
        className={`${styles.Product_reviews} d-flex flex-column justify-content-start mt-4`}
      >
        <div className="d-flex flex-align-center justify-content-start">
          <TextLarge type="md" className="t-semibold mt-2">
            Ratings & Reviews
          </TextLarge>
          {/* <TextExtraLarge type="sm" className={"ms-2"}>
            ★
          </TextExtraLarge> */}
        </div>
        <div className="d-flex align-items-center justify-content-start">
          <div className="d-flex align-items-center justify-content-start mt-4">
            <div className="d-flex align-items-center flex-column">
              <TextExtraLarge
                type="md"
                className={"d-flex align-items-center justify-content-center"}
              >
                {product.rating}{" "}
                <span
                  className={`ms-3 text-${
                    defaultRatingsColors[String(product.rating).substring(0, 1)]
                  }`}
                >
                  ★
                </span>
              </TextExtraLarge>
              <TextSmall type="md" className={"t-regular mt-2"}>
                {product.reviews.length} Ratings
              </TextSmall>
            </div>
          </div>
          <RatingBars ratings={product.reviews} />
        </div>

        <Reviews reviews={product.reviews} />
      </div>
    </div>
  );
}
