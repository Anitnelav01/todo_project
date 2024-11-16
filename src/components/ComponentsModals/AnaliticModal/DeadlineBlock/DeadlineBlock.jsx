import React from "react";
import styles from "./_DeadlineBlock.module.scss";
import calendarIcon from "../../../../icons/Group 139.svg";

const DeadlineBlock = () => {
  return (
    <div className={styles["deadline-block"]}>
      <div className={styles["title-container-position"]}>
        <h3 className={styles["deadline-title"]}>Дедлайн</h3>
        <span>Установлен</span>
      </div>
      <div className={styles["deadline-info"]}>
        <div className={styles["deadline-set"]}>
          <button className={styles["calendar-button"]}>
            <img
              src={calendarIcon}
              alt="Календарь"
              className={styles["calendar-icon"]}
            />
          </button>
        </div>
        <div className={styles["deadline-date"]}>
          <span>28.12.2023</span>
          <span>-</span>
          <span>29.12.2023</span>
        </div>
      </div>
    </div>
  );
};

export default DeadlineBlock;
