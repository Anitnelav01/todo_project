import React from "react";
import styles from "./_ColorBlock.module.scss"; // Импорт стилей

const ColorBlock = ({ colors }) => {
  return (
    <div className={styles["color-block"]}>
      <div className={styles["collecton-color"]}>
        {colors.map((color, index) => (
          <div
            key={index}
            className={styles["color"]}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      <button className={styles["add-button"]}>+</button>
    </div>
  );
};

export default ColorBlock;
