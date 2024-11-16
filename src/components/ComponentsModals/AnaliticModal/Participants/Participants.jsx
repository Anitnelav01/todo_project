import React from "react";
import styles from "./_Participants.module.scss";

const Participants = ({ participants }) => {
  return (
    <div className={styles["participants"]}>
      <h3 className={styles["participants-title"]}>Участники</h3>
      <div className={styles["avatars"]}>
        {participants.map((participant, index) => (
          <div
            key={index}
            className={styles["avatar-wrapper"]}
            title={participant.name}
          >
            <img
              src={participant.avatar}
              style={{ border: `2px solid ${participant.color}` }}
              alt={`Participant ${index + 1}`}
              className={styles["avatar"]}
            />
          </div>
        ))}
        <button className={styles["add-participant-button"]}>+</button>
      </div>
    </div>
  );
};

export default Participants;
