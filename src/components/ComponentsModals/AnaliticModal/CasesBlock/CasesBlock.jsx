import React from "react";
import styles from "./_CasesBlock.module.scss";

const CasesBlock = ({ title, cases }) => {
  return (
    <div className={styles["cases-block"]}>
      <h3 className={styles["cases-title"]}>{title}</h3>
      <ul>
        {cases.map((caseItem, index) => (
          <li key={index} className={styles["case-item"]}>
            {caseItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CasesBlock;
