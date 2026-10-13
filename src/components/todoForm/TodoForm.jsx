import React from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ handleGoalList }) {
  const [goals, setGoals] = React.useState("");

  function handleForm(eve) {
    eve.preventDefault();
    if (goals.trim() === "") return;
    setGoals("");
    handleGoalList(goals);
  }

  return (
    <form className={`${styles.wrapper}`} onSubmit={handleForm}>
      <input
        type="text"
        value={goals}
        onChange={(eve) => setGoals(eve.target.value)}
        className={`${styles.formInput}`}
      ></input>
      <button type="submit" className={styles.submitBtn}>
        Add
      </button>
    </form>
  );
}

export default TodoForm;
