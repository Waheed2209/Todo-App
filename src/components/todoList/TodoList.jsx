import React from "react";
import styles from "./TodoList.module.css";
import { X } from "react-feather";

// fix the label for screen readers

function TodoList({ goalsList, removeTodo, checkBox }) {
  return goalsList.length > 0 ? (
    <ul className={`${styles.wrapper}`}>
      {goalsList.map(({ id, goals, completed }) => (
        <li
          key={id}
          className={`${styles.lstcontainer} ${
            completed ? styles.completed : ""
          }`}
        >
          <label className={styles.checkboxWrap}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => checkBox(id)}
            />
            <span className={styles.checkboxVisual}></span>
          </label>
          {goals}
          <button onClick={() => removeTodo(id)} className={`${styles.lstbtn}`}>
            {" "}
            <X />
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p className={styles.para}>No tasks Yet !</p>
  );
}

export default TodoList;
