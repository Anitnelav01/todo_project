import React from "react";
import styles from "./_TasksBlock.module.scss";

const TasksBlock = ({ title, tasks }) => {
  return (
    <div className={styles["tasks-block"]}>
      <div className={styles["task-position-button"]}>
        <h3 className={styles["tasks-title"]}>{title}</h3>
        <button className={styles["add-task-button"]}>+</button>
      </div>
      <ul className={styles["task-list"]}>
        {tasks.map((task) => (
          <li key={task.id} className={styles["task-item"]}>
            <span className={styles["task-circle"]}>{task.symbol}</span>
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksBlock;
