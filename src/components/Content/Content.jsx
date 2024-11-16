import React from "react";
import Modal from "../Modal/Modal";
import styles from "./_content.module.scss";

const Content = ({ activeIndex, onClose }) => {
  return (
    <div>
      <div className={styles.container}>
        {activeIndex !== null && (
          <Modal index={activeIndex} onClose={onClose} />
        )}
      </div>
    </div>
  );
};

export default Content;
