import React from "react";
import styles from "./_TaskList.module.scss";

const TaskList = ({ tasks, checkedTasks, onAddTask, onTaskChange }) => (
  <div className={styles["block-check-list"]}>
    <div className={styles["container-check-list"]}>
      <h3 className={styles["check-list"]}>Проверки сдачи</h3>
      <button onClick={onAddTask} className={styles["addButton"]}>
        {"+"}
      </button>
    </div>
    <ul className={styles["taskList"]}>
      {tasks.map((task) => (
        <li key={task}>
          <label>
            <input
              type="checkbox"
              checked={!!checkedTasks[task]}
              onChange={() => onTaskChange(task)}
            />
            {task}
          </label>
        </li>
      ))}
    </ul>
  </div>
);

export default TaskList;
