import React from "react";
import styles from "./_Comment.module.scss";
import image from "../../../icons/Group 157.svg";

const Comment = () => {
  const commentData = {
    avatar: image,
    name: "Max Sharlaev",
    date: "12:20, 24.02.2023",
    message:
      "Не получилось с первого раза. Дама в окошке какой-то зверь, хамит и ничего не объясняет!",
  };

  return (
    <div className={styles["commentContainer"]}>
      <div className={styles["commentItem"]}>
        <img src={commentData.avatar} alt="Avatar" className={styles.avatar} />
        <div className={styles["blockItem"]}>
          <div className={styles["commentHeader"]}>
            <div className={styles["commentInfo"]}>
              <h4 className={styles["commentName"]}>{commentData.name}</h4>
              <span className={styles["commentDate"]}>{commentData.date}</span>
            </div>
          </div>
          <p className={styles["commentMessage"]}>{commentData.message}</p>
        </div>
      </div>

      <div className={styles["textareaContainer"]}>
        <img src={image} alt="Avatar" className={styles["textareaAvatar"]} />
        <textarea
          placeholder="Ваш комментарий"
          className={styles["textarea"]}
        />
      </div>
    </div>
  );
};

export default Comment;
