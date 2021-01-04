import React from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";

const TaskForm = ({ inputText, setInputText, tasks, setTasks }) => {
  const dispatch = useDispatch();

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = () => {
    setTasks([
      ...tasks,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <>
      <label htmlFor="Task">Zadanie</label>
      <input
        value={inputText}
        onChange={inputTextHandler}
        id="Task"
        type="text"
      />
      <Button
        click={() => {
          submitTodoHandler();
          dispatch({ type: "ADDTASK" });
        }}
        value={"Dodaj"}
      />
    </>
  );
};

export default TaskForm;
