import React, { useState } from "react";
import styled from "styled-components";
import CheckIcon from "../../images/CheckIcon.svg";
import InfoIcon from "../../images/InfoIcon.svg";
import xMark from "../../images/X-Mark.svg";

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
          <Icon src={xMark} onClick={deleteHandler} />
        </IconWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 90%;
  min-height: 4rem;
  margin: 1rem 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.5s ease;
  overflow: hidden;
  border-radius: 10px;
  &.checked {
    background: #dfdfdf;
    transition: 0.5s ease;
  }
  &.toggle {
    height: 20rem;
    transition: 0.5s ease;
  }
  @media screen and (max-width: 820px) {
    min-height: 10rem;
    align-items: flex-start;
  }
`;

const TaskHeader = styled.h2`
  display: block;
  margin-left: 1rem;
  font-size: 1.6rem;
  font-weight: 400;
  width: 70%;
  word-wrap: break-word;
  white-space: wrap;
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
  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease;
  }
  &.checked {
    background: #01c915;
  }
`;

export default Task;
