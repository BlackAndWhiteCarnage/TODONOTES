import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../Button";

const TaskWrapperForm = ({ inputText, setInputText, tasks, setTasks }) => {
  const toggleDarkMode = useSelector((state) => state.toggleDarkMode);
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
      <Input
        className={toggleDarkMode && "darkMode"}
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

const Input = styled.input`
  border: none;
  width: 90%;
  height: 2rem;
  margin: auto;
  font-size: 1.6rem;
  border-bottom: 3px solid #01c915;
  padding: 1rem 0;
  &:focus {
    outline: none;
    border-top: 3px solid #01c915;
  }
  &.darkMode {
    background: #353535;
    color: white;
  }
  @media screen and (max-width: 820px) {
    font-size: 1.2rem;
  }
`;

export default TaskWrapperForm;
