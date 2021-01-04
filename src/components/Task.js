import React, { useState } from "react";
import styled from "styled-components";
import CheckIcon from "../images/CheckIcon.svg";
import InfoIcon from "../images/InfoIcon.svg";
import xMarkTransparent from "../images/X-Mark-Transparent.svg";

const Task = ({ text, tasks, task, setTasks }) => {
  const [checked, setChecked] = useState(false);

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
    <>
      <Wrapper className={task.completed && "checked"}>
        <TaskHeader>{text}</TaskHeader>
        <IconWrapper>
          <Icon src={CheckIcon} onClick={completeHandler} />
          <Icon src={InfoIcon} />
          <Icon src={xMarkTransparent} onClick={deleteHandler} />
        </IconWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 95%;
  min-height: 4rem;
  margin: 1rem 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.5s ease;
  &.checked {
    background: #dfdfdf;
    transition: 0.5s ease;
  }
`;

const TaskHeader = styled.h2`
  margin-left: 1rem;
  font-size: 1.6rem;
  font-weight: 400;
`;

const IconWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: 0.5s ease;
  border-radius: 50%;
  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease;
  }
`;

export default Task;
