import React from "react";
import styles from "./_ExecutionTimeBlock.module.scss";
import clockIcon from "../../../../icons/Group 141.svg";

const ExecutionTimeBlock = () => {
  return (
    <div className={styles["execution-time-block"]}>
      <div className={styles["title-container-position"]}>
        <h3 className={styles["execution-title"]}>Время выполнения</h3>
        <span>трекер</span>
      </div>
      <div className={styles["time-inputs"]}>
        <img src={clockIcon} alt="Часы" className={styles["clock-icon"]} />
        <div className={styles["container-time-input"]}>
          <div className={styles["title-time-input"]}>Planned</div>
          <input
            type="text"
            placeholder="4h"
            className={styles["time-input"]}
          />
        </div>
        <div className={styles["container-time-input"]}>
          <div className={styles["title-time-input"]}>Actual</div>
          <input
            type="text"
            placeholder="0h"
            className={styles["time-input"]}
          />
        </div>
      </div>
    </div>
  );
};

export default ExecutionTimeBlock;
