import React from "react";
import styles from "./_ImageGallery.module.scss";

const ImageGallery = ({ images, onImageClick }) => (
  <div className={styles["imageContainer"]}>
    {images.map((image, index) => (
      <img
        key={index}
        src={image.src}
        alt={image.alt}
        className={styles.thumbnail}
        onClick={() => onImageClick(image.src)}
      />
    ))}
  </div>
);

export default ImageGallery;
