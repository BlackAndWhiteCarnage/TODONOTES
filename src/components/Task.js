import React, { useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import xMark from "../images/X-Mark.svg";
import TasksList from "./TasksList";
import Button from "./Button";

const tasks = [];

const Task = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);

  return (
    <>
      <TaskWrapper className={toggle === 1 ? "toggle" : "toggleOut"}>
        <label htmlFor="Task">Zadanie</label>
        <input ref={inputRef} id="Task" type="text" />
        <Button
          click={() => {
            tasks.push(inputRef.current.value);
            dispatch({ type: "ADDTASK" });
          }}
          value={"Dodaj"}
        />
        <Icon src={xMark} onClick={() => dispatch({ type: "BACK" })} />
      </TaskWrapper>
      <TasksWrapper className={toggle === 3 ? "toggle" : "toggleOut"}>
        <Icon src={xMark} onClick={() => dispatch({ type: "BACK" })} />
        {tasks.map((value, index) => (
          <TasksList key={index} index={index} value={value}></TasksList>
        ))}
      </TasksWrapper>
    </>
  );
};

const TaskWrapper = styled.div`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-0%, -50%);
  z-index: 5;
  transition: 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  pointer-events: none;
  label {
    font-size: 2.4rem;
    margin: auto 0 0 4rem;
    cursor: pointer;
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
  button {
    margin: 0 4rem 1rem auto;
  }
  &.toggle {
    opacity: 1;
    background-color: #f6f6f6;
    width: 70%;
    height: 15rem;
    transition: 0.5s ease;
    pointer-events: all;
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
  display: none;
  padding: 4rem 0;
  &.toggle {
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-0%, -50%);
    z-index: 5;
    transition: 0.5s ease;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    align-items: center;
    background-color: #f6f6f6;
    width: 70%;
    height: 40rem;
    transition: 0.5s ease;
  }
`;

export default Task;
