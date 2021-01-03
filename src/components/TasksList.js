import React, { useState } from "react";
import styled from "styled-components";
import CheckIcon from "../images/CheckIcon.svg";
import InfoIcon from "../images/InfoIcon.svg";
import xMarkTransparent from "../images/X-Mark-Transparent.svg";

const TasksList = ({ value, index }) => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Task className={checked && "checked"}>
        <TaskHeader>{value}</TaskHeader>
        <IconWrapper>
          <Icon
            src={CheckIcon}
            onClick={(e) => {
              setChecked(!checked);
              if (checked) {
                e.target.style.background = "none";
              } else {
                e.target.style.background = "#01c915";
              }
            }}
          />
          <Icon src={InfoIcon} />
          <Icon
            src={xMarkTransparent}
            onClick={(e) => e.target.parentElement.parentElement.remove()}
          />
        </IconWrapper>
      </Task>
    </>
  );
};

const Task = styled.div`
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

export default TasksList;
