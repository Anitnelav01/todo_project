import React from "react";
import styles from "./_header.module.scss";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-left"]}>
        <button className={styles["menu-button"]}>
          <span className={styles["menu-icon"]}></span>
          <span className={styles["menu-icon"]}></span>
          <span className={styles["menu-icon"]}></span>
        </button>
      </div>
      <div className={styles["header-right"]}>
        <h1>Dillinger Escape Plan</h1>
      </div>
    </header>
  );
};

export default Header;
