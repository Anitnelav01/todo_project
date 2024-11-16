import React from "react";
import styles from "./_Analytics.module.scss"; // Импорт стилей

const Analytics = ({ analyticsData }) => {
  return (
    <div className={styles["analytics"]}>
      <h3 className={styles["analytics-title"]}>Аналитика</h3>
      <div className={styles["cubes"]}>
        {analyticsData.map((data, index) => (
          <div className={styles["container-cubes"]}>
            <div className={styles["title"]}>{data.name}</div>
            <div
              key={index}
              className={styles["cube"]}
              style={{ backgroundColor: data.color }}
            >
              <div className={styles["number"]}>{data.number}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
