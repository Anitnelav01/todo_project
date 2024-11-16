import React from "react";
import Comment from "../Comment/Comment";
import styles from "./_TabContent.module.scss";

const TabContent = ({ activeTab, setActiveTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "comments":
        return <Comment />;
      case "history":
        return <div>Здесь будет история.</div>;
      case "files":
        return <div>Здесь будут файлы.</div>;
      default:
        return null;
    }
  };

  return (
    <div className={styles["container-comments"]}>
      <div className={styles["tabContainer"]}>
        <button
          className={activeTab === "comments" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("comments")}
        >
          comments
        </button>
        <button
          className={activeTab === "history" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("history")}
        >
          history
        </button>
        <button
          className={activeTab === "files" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("files")}
        >
          files
        </button>
      </div>
      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
};

export default TabContent;
