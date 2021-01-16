import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import BackIcon from "../../images/Back.svg";
import BackIconWhite from "../../images/BackWhite.svg";
import TasksList from "./TasksList";
import TaskWrapperForm from "./TaskWrapperForm";

const TaskWrapper = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);
  const toggleDarkMode = useSelector((state) => state.toggleDarkMode);
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const getTasks = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      let taskLocal = JSON.parse(localStorage.getItem("tasks"));
      setTasks(taskLocal);
    }
  };

  return (
    <>
      <TaskFormWrapper
        className={toggle === 1 && `toggle ${toggleDarkMode && " darkMode"}`}
      >
        <TaskWrapperForm
          tasks={tasks}
          setTasks={setTasks}
          inputText={inputText}
          setInputText={setInputText}
        />
        <Icon
          src={toggleDarkMode ? BackIconWhite : BackIcon}
          onClick={() => dispatch({ type: "BACK" })}
        />
      </TaskFormWrapper>
      <TaskListWrapper
        className={toggle === 3 && `toggle ${toggleDarkMode && " darkMode"}`}
      >
        <Icon
          src={toggleDarkMode ? BackIconWhite : BackIcon}
          onClick={() => dispatch({ type: "BACK" })}
        />
        <TasksList tasks={tasks} setTasks={setTasks} />
      </TaskListWrapper>
    </>
  );
};

const TaskFormWrapper = styled.div`
  display: none;
  label {
    font-size: 2.4rem;
    cursor: pointer;
    margin: 1rem;
  }
  &.toggle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-items: center;
    justify-content: space-around;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
    border-radius: 10px;
    width: 60%;
    z-index: 5;
    &.darkMode {
      background: rgba(0, 0, 0, 0.4);
    }
    @media screen and (max-width: 820px) {
      width: 95%;
    }
  }
`;

const TaskListWrapper = styled.div`
  display: none;
  &.toggle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 4rem 0;
    pointer-events: all;
    z-index: 5;
    overflow-y: scroll;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
    border-radius: 10px;
    width: 60%;
    height: 50rem;
    &.darkMode {
      background: rgba(0, 0, 0, 0.4);
    }
    @media screen and (max-width: 820px) {
      width: 95%;
      height: 80%;
    }
  }
`;

const Icon = styled.img`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  transition: 0.5s ease;
  width: 2.5rem;
  &::selection {
    background: none;
  }
  &:hover {
    transition: 0.5s ease;
    transform: scale(1.2) rotate(-360deg);
  }
  @media (max-width: 820px) {
    width: 2rem;
    top: 0.5rem;
    right: 0.5rem;
  }
`;

export default TaskWrapper;
