import React from "react";
import "./App.module.css";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import NavControl from "./navcontrol";
import CardFormatter from "./CardFormatter";

import useEscapeKey from "./hooks/useEscapeKey";

import Header from "./header/Header";

function App() {
  const [goalsList, setGoalsList] = React.useState([]);

  const [navState, setNavState] = React.useState("All");

  function handleGoalList(goals) {
    setGoalsList([
      ...goalsList,
      { id: crypto.randomUUID(), goals, completed: false },
    ]);
  }

  function removeTodo(todoId) {
    const newList = goalsList.filter(({ id }) => id != todoId);
    setGoalsList(newList);
  }

  function checkBox(todoId) {
    const newTodoList = goalsList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      } else {
        return { ...todo };
      }
    });
    setGoalsList(newTodoList);
  }

  function navStateSetter(state) {
    setNavState(state);
  }

  const filteredArr = React.useMemo(() => {
    return navState === "All"
      ? goalsList
      : navState === "Active"
      ? goalsList.filter(({ completed }) => !completed)
      : goalsList.filter(({ completed }) => completed);
  }, [navState, goalsList]);

  const activeList = React.useMemo(() => {
    return goalsList.filter(({ completed }) => !completed);
  }, [goalsList]);

  const clearAll = React.useCallback(() => setGoalsList([]), []);

  useEscapeKey(clearAll);

  return (
    <>
      <Header></Header>
      <main>
        <CardFormatter activeList={activeList} type={"H1"}></CardFormatter>
        <TodoForm handleGoalList={handleGoalList}></TodoForm>
        <NavControl
          navStateSetter={navStateSetter}
          navState={navState}
        ></NavControl>
        <TodoList
          goalsList={filteredArr}
          removeTodo={removeTodo}
          checkBox={checkBox}
        ></TodoList>
        <CardFormatter activeList={activeList} type={"p"}></CardFormatter>
      </main>
    </>
  );
}

export default App;
