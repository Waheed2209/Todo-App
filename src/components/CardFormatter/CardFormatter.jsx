import React from "react";
import styles from "./CardFormatter.module.css";

function CardFormatter({ activeList, type: Type }) {
  const remainderTasks = activeList.length;
  return (
    <div
      className={`${styles.wrapper} ${Type === "p" ? styles.footerBorder : ""}`}
    >
      {Type === "H1" && <p>MY TASKS</p>}
      <Type>{`${remainderTasks} remaining`}</Type>
    </div>
  );
}

export default CardFormatter;
