import React from "react";
import styles from "./_Avatar.module.scss"; // Импорт стилей

const Avatar = ({ avatar, color, name }) => {
  return (
    <div className={styles["avatar-wrapper"]} title={name}>
      <img
        src={avatar}
        style={{ border: `2px solid ${color}` }}
        alt={`Participant ${name}`}
        className={styles["avatar"]}
      />
    </div>
  );
};

export default Avatar;
