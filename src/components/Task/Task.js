import React from "react";
import styled from "styled-components";
import CheckedIcon from "../../images/CheckedIcon.svg";
import UncheckedIcon from "../../images/UncheckedIcon.svg";
import UncheckedIconWhite from "../../images/UncheckedIconWhite.svg";
import { useSelector } from "react-redux";
import xMark from "../../images/X-Mark.svg";

const Task = ({ text, tasks, task, setTasks }) => {
  const toggleDarkMode = useSelector((state) => state.toggleDarkMode);

  const deleteHandler = () => {
    setTasks(tasks.filter((el) => el.id !== task.id));
  };

  const completeHandler = () => {
    setTasks(
      tasks.map((el) => {
        if (el.id === task.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  return (
    <TaskWrapper
      className={
        task.completed
          ? `checked ${toggleDarkMode && " darkMode"}`
          : `${toggleDarkMode && " darkMode"}`
      }
    >
      <TaskHeader>{text}</TaskHeader>
      <IconWrapper>
        <Icon
          src={
            task.completed
              ? CheckedIcon
              : toggleDarkMode
              ? UncheckedIconWhite
              : UncheckedIcon
          }
          onClick={completeHandler}
        />
        <Icon src={xMark} onClick={deleteHandler} />
      </IconWrapper>
    </TaskWrapper>
  );
};

const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  min-height: 5rem;
  margin: 1rem 0;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.5s ease;
  &.darkMode {
    background: #1d1d1d;
  }
  &.checked {
    background: rgba(255, 255, 255, 0.3);
    transition: 0.5s ease;
    &.darkMode {
      background: rgba(53, 53, 53, 0.3);
    }
  }
  @media screen and (max-width: 820px) {
    min-height: 8rem;
    align-items: flex-start;
  }
`;

const TaskHeader = styled.h2`
  margin: 1rem;
  font-size: 1.6rem;
  font-weight: 700;
  width: 80%;
  word-wrap: break-word;
  white-space: wrap;
  font-family: "Lato", sans-serif;
  @media screen and (max-width: 820px) {
    margin: 0.5rem;
  }
`;

const IconWrapper = styled.div`
  min-width: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    height: 100%;
    min-width: 5rem;
  }
`;

const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: 0.5s ease;
  border-radius: 50%;
  &::selection {
    background: none;
  }
  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease;
  }
  &.checked {
    background: #01c915;
  }
`;

export default Task;
