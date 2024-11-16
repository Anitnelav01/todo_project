import React from "react";
import styles from "./_ImageOverlay.module.scss";

const ImageOverlay = ({ isOpen, onClose, selectedImage }) =>
  isOpen && (
    <div className={styles["overlay"]} onClick={onClose}>
      <img src={selectedImage} alt="Large" className={styles["largeImage"]} />
    </div>
  );

export default ImageOverlay;
