import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import xMark from "../../images/X-Mark.svg";
import TasksList from "./TasksList";
import TaskForm from "./TaskForm";

const TaskWrapper = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);

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
      <Wrapper className={toggle === 1 && "toggle"}>
        <TaskForm
          tasks={tasks}
          setTasks={setTasks}
          inputText={inputText}
          setInputText={setInputText}
        />
        <Icon src={xMark} onClick={() => dispatch({ type: "BACK" })} />
      </Wrapper>
      <TasksWrapper className={toggle === 3 && "toggle"}>
        <Icon src={xMark} onClick={() => dispatch({ type: "BACK" })} />
        <TasksList tasks={tasks} setTasks={setTasks} />
      </TasksWrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  transition: 0.3s ease;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  pointer-events: none;
  width: 0;
  height: 15rem;
  label {
    font-size: 2.4rem;
    cursor: pointer;
    margin-top: 2rem;
  }
  input {
    border: none;
    width: 90%;
    height: 2rem;
    margin: auto;
    font-size: 1.6rem;
    border-bottom: 3px solid #01c915;
    padding: 1rem 0;
  }
  &.toggle {
    opacity: 1;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
    border-radius: 10px;
    width: 70%;
    transition: 0.5s ease;
    pointer-events: all;
    @media screen and (max-width: 820px) {
      height: 25rem;
      width: 95%;
      label {
        margin-top: 5rem;
      }
    }
  }
`;

const Icon = styled.img`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    transition: 0.5s ease;
    transform: scale(1.2) rotate(360deg);
  }
`;

const TasksWrapper = styled.div`
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
  &.toggle {
    display: flex;
    align-items: center;
    padding: 4rem 0;
    opacity: 1;
    position: absolute;
    pointer-events: all;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    transition: 0.5s ease;
    flex-direction: column;
    overflow-y: scroll;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
    border-radius: 10px;
    width: 60%;
    height: 40rem;
    transition: 0.5s ease;
    @media screen and (max-width: 820px) {
      top: 45%;
      width: 95%;
      height: 80%;
      align-items: center;
    }
  }
`;

export default TaskWrapper;
