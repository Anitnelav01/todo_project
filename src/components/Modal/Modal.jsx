import React from "react";
import PreTripChecklist from "../ComponentsModals/PreTripChecklist/PreTripChecklist";
import styles from "./_modal.module.scss";

const Modal = ({ index, onClose }) => {
  const renderContent = () => {
    switch (index) {
      case 0:
        return (
          <div className={styles.content}>
            <div className={styles.block_center}>Контент для случая 1</div>
          </div>
        );
      case 1:
        return (
          <div className={styles.content}>
            <PreTripChecklist />
          </div>
        );
      case 2:
        return (
          <div className={styles.content}>
            <div className={styles.block_center}>Контент для случая 3</div>
          </div>
        );
      case 3:
        return (
          <div className={styles.content}>
            <div className={styles.block_center}>Контент для случая 4</div>
          </div>
        );
      case 4:
        return (
          <div className={styles.content}>
            <div className={styles.block_center}>Контент для случая 5</div>
          </div>
        );
      case 5:
        return (
          <div className={styles.content}>
            <div className={styles.block_center}>Контент для случая 6</div>
          </div>
        );
      case 6:
        return (
          <div className={styles.content}>
            <div className={styles.block_center}>Контент для случая 7</div>
          </div>
        );
      case 7:
        return (
          <div className={styles.content}>
            <div className={styles.block_center}>Контент для случая 8</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>
          ✖
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export default Modal;
