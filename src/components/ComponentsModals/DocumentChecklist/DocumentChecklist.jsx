import React from "react";
import styles from "./_DocumentChecklist.module.scss";

const DocumentChecklist = ({
  listDocuments,
  checkedDocuments,
  onDocumentChange,
}) => (
  <div className={styles["block_list"]}>
    <h3 className={styles["block_list__title"]}>Список документов</h3>
    <ul className={styles["list-document"]}>
      {listDocuments.map((document) => (
        <li key={document}>
          <label>
            <input
              type="checkbox"
              checked={!!checkedDocuments[document]}
              onChange={() => onDocumentChange(document)}
            />
            {document}
          </label>
        </li>
      ))}
    </ul>
  </div>
);

export default DocumentChecklist;
