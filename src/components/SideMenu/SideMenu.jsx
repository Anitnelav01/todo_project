import React from "react";
import styles from "./_sidemenu.module.scss";
import Logo from "../../icons/sV.svg";
import buttonData from "./buttonData";
import Group from "../../icons/Group 1.svg";

const SideMenu = ({ activeIndex, onMenuClick }) => {
  return (
    <div className={styles["side-menu"]}>
      <a href="/" className={styles["logo"]}>
        <img src={Logo} alt="Logo" />
      </a>
      <div className={styles.buttons}>
        {buttonData.map((button, index) => (
          <a
            href={button.link}
            key={index}
            className={`${styles["menu-button"]} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              onMenuClick(index);
            }}
          >
            <img
              src={button.image}
              alt={button.text}
              className={styles["button-image"]}
            />
          </a>
        ))}
      </div>
      <a href="/" className={styles["auth-icon"]}>
        <img src={Group} alt="auth-icon" />
      </a>
    </div>
  );
};

export default SideMenu;
