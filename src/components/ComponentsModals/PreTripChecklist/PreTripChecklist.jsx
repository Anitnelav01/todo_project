import React, { useState } from "react";
import styles from "./_PreTripChecklist.module.scss";
import image1 from "../../../icons/image 1.svg";
import image2 from "../../../icons/image 2.svg";
import ImageGallery from "../ImageGallery/ImageGallery";
import DocumentChecklist from "../DocumentChecklist/DocumentChecklist";
import TaskList from "../TaskList/TaskList";
import TabContent from "../TabContent/TabContent";
import ImageOverlay from "../ImageOverlay/ImageOverlay";
import AnaliticModal from "../AnaliticModal/AnaliticModal";

const PreTripChecklist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [checkedDocuments, setCheckedDocuments] = useState({});
  const [tasks, setTasks] = useState([
    "Переговорить с оператором",
    "Получить требования",
    "Довезти необходимые документы",
  ]);
  const [checkedTasks, setCheckedTasks] = useState({});
  const [activeTab, setActiveTab] = useState("comments");

  const images = [
    { src: image1, alt: "Image 1" },
    { src: image2, alt: "Image 2" },
  ];

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
      setSelectedImage(null);
    }
  };

  const handleDocumentChange = (document) => {
    setCheckedDocuments((prev) => ({
      ...prev,
      [document]: !prev[document],
    }));
  };

  const handleAddTask = () => {
    const newTask = prompt("Введите новую задачу:");
    if (newTask) {
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  };

  const handleTaskChange = (task) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [task]: !prev[task],
    }));
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["left-column"]}>
        <div className={styles["modal_header"]}>
          <h2 className={styles["title_modal"]}>Дела до отъезда</h2>
          <p className={styles["desc_modal"]}>
            Решить некоторое количество дел до отъезда из города
          </p>
        </div>

        <ImageGallery images={images} onImageClick={handleImageClick} />

        <DocumentChecklist
          listDocuments={["Паспорт", "Полис", "СНИЛС"]}
          checkedDocuments={checkedDocuments}
          onDocumentChange={handleDocumentChange}
        />

        <TaskList
          tasks={tasks}
          checkedTasks={checkedTasks}
          onAddTask={handleAddTask}
          onTaskChange={handleTaskChange}
        />

        <TabContent activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <AnaliticModal />

      <ImageOverlay
        isOpen={isOpen}
        onClose={handleClose}
        selectedImage={selectedImage}
      />
    </div>
  );
};

export default PreTripChecklist;
