import React, { useState } from "react";
import styled from "styled-components";
import CheckIcon from "../../images/CheckIcon.svg";
import InfoIcon from "../../images/InfoIcon.svg";
import xMarkTransparent from "../../images/X-Mark-Transparent.svg";
import Button from "../Button";

const Task = ({ text, tasks, task, setTasks }) => {
  const [toggle, setToggle] = useState(false);
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
      <Wrapper className={`${task.completed && "checked"}`}>
        <TaskHeader>{text}</TaskHeader>
        <IconWrapper>
          <Icon
            src={CheckIcon}
            onClick={completeHandler}
            className={task.completed && "checked"}
          />
          <Icon src={InfoIcon} onClick={() => setToggle(!toggle)} />
          <Icon src={xMarkTransparent} onClick={deleteHandler} />
        </IconWrapper>
        <Div className={toggle && "toggle"}>
          <Button />
        </Div>
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
  overflow: hidden;
  &.checked {
    background: #dfdfdf;
    transition: 0.5s ease;
  }
  &.toggle {
    height: 20rem;
    transition: 0.5s ease;
  }
`;

const TaskHeader = styled.h2`
  margin-left: 1rem;
  font-size: 1.6rem;
  font-weight: 400;
`;

const Div = styled.div`
  display: none;
  height: 20rem;
  &.toggle {
    display: block;
  }
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
  &.checked {
    background: #01c915;
  }
`;

export default Task;
