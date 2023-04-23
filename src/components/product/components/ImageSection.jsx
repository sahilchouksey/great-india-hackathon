import { useEffect, useRef } from "react";
import { Image } from "react-bootstrap";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "../splide.min.scss";
import styles from "../styles.module.scss";
import LeftArrow from "../../../assets/icons/leftArrow";
import RightArrow from "../../../assets/icons/rightArrow";

export default function ImageSection({ images }) {
  const galleryThumbnailRef = useRef();
  const gallerySliderRef = useRef();

  if (!images || images.length === 0) {
    return null;
  }

  useEffect(() => {
    if (
      gallerySliderRef?.current &&
      galleryThumbnailRef?.current &&
      galleryThumbnailRef?.current?.splide
    ) {
      // syncing slide with thumbnail slider
      gallerySliderRef.current.sync(galleryThumbnailRef.current.splide);
    }
  }, []);

  const gallerySliderOptions = {
    type: "slide",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    height: "35rem",
  };
  const galleryThumbnailSliderOptions = {
    type: "slide",
    // rewind: true,
    gap: "1rem",
    pagination: false,
    fixedWidth: 75,
    fixedHeight: 50,
    cover: true,
    focus: "center",
    isNavigation: true,
  };

  const Images = images.map((image) => {
    return (
      <SplideSlide key={image.id}>
        <Image src={image.src} alt={image.alt} />
      </SplideSlide>
    );
  });
  return (
    <div className={styles.ImageSection}>
      <div className="w-100">
        <Splide
          className={"thumbnail-slide"}
          options={gallerySliderOptions}
          ref={gallerySliderRef}
        >
          {Images}
        </Splide>
        <Splide
          className={"gallery-slide"}
          options={galleryThumbnailSliderOptions}
          ref={galleryThumbnailRef}
        >
          {Images}
        </Splide>
      </div>
    </div>
  );
}
