import React from "react";
import styles from "./_Status.module.scss";

const Status = () => {
  return (
    <div className={styles["status"]}>
      <h3 className={styles["status-title"]}>Состояние</h3>
      <div className={styles["status-block"]}>
        <div className={styles["status-indicator"]}></div>
        <p className={styles["status-text"]}>В работа</p>
      </div>
    </div>
  );
};

export default Status;
