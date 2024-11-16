import React from "react";
import styles from "./_AnaliticModal.module.scss";
import consAvatar from "../../../icons/Group 157.svg";
import ColorBlock from "./ColorBlock/ColorBlock";
import Analytics from "./Analytics/Analytics";
import Status from "./Status/Status";
import Participants from "./Participants/Participants";
import DeadlineBlock from "./DeadlineBlock/DeadlineBlock";
import ExecutionTimeBlock from "./ExecutionTimeBlock/ExecutionTimeBlock";
import TasksBlock from "./TasksBlock/TasksBlock";

const AnaliticModal = () => {
  const colors = ["#E22E2E", "#E2C62E", "#2EA1E2"];
  const analyticsData = [
    {
      color: "#61D61A",
      number: 99,
      name: "tss",
    },
    {
      color: "#61D61A",
      number: 0,
      name: "rc",
    },
    {
      color: "#F81A1A",
      number: 99,
      name: "heat",
    },
    {
      color: "#F8D51A",
      number: 12,
      name: "ddl",
    },
    {
      color: "#F8D51A",
      number: 60,
      name: "prob",
    },
  ];
  const participants = [
    { avatar: consAvatar, name: "Иван Иванов", color: "#F4822F" },
    { avatar: consAvatar, name: "Петр Петров", color: "#2F5AF4" },
    { avatar: consAvatar, name: "Сидор Сидоров", color: "#D9D9D9" },
  ];
  const tasks = [
    { id: 1, name: "Список документов", symbol: "➜" },
    { id: 2, name: "Проверки сдачи", symbol: "" },
  ];

  const cases = [{ id: 1, name: "Переезд", symbol: "➜" }];

  return (
    <div className={styles["modal"]}>
      <div>
        <ColorBlock colors={colors} />
        <Analytics analyticsData={analyticsData} />
        <Status />
        <Participants participants={participants} />
      </div>
      <div className={styles["deadline"]}>
        <DeadlineBlock />
        <ExecutionTimeBlock />
        <TasksBlock tasks={tasks} title="Список задач" />
        <TasksBlock tasks={cases} title="Кейсы" />
      </div>
    </div>
  );
};

export default AnaliticModal;
