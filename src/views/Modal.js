import React, { useState } from "react";
import styled from "styled-components";
import DarkModeIcon from "../images/DarkModeIcon.svg";
import ColorIcon from "../images/ColorIcon.svg";
import AddIcon from "../images/AddIcon.svg";
import { useDispatch } from "react-redux";

const Modal = () => {
  const [showColors, setShowColors] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();

  return (
    <ModalWrapper>
      <Icon src={ColorIcon} onClick={() => setShowColors(!showColors)} />
      <Colors className={showColors && "toggle"}>
        <Color className={showColors && "toggle purple"} />
        <Color className={showColors && "toggle yellow"} />
        <Color className={showColors && "toggle green"} />
      </Colors>
      <Icon src={DarkModeIcon} />
      <Icon src={AddIcon} onClick={() => setShowOptions(!showOptions)} />
      <Options className={showOptions && "toggle"}>
        <Option
          className={showOptions && "toggle"}
          onClick={() => dispatch({ type: "NOTEBOOKTOGGLE" })}
        >
          Nowy <span>notatnik</span>
        </Option>
        <Option
          className={showOptions && "toggle"}
          onClick={() => dispatch({ type: "TASKTOGGLE" })}
        >
          Nowe <span>zadanie</span>
        </Option>
        <Option className={showOptions && "toggle"}>
          Nowa <span>notatka</span>
        </Option>
      </Options>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
  height: 3.5rem;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
  box-shadow: 5px 0px 20px 10px rgba(0, 0, 0, 0.2);
  &.toggle {
    width: 20rem;
  }
  @media (max-width: 820px) {
    display: none;
  }
`;

const Colors = styled.div`
  transition: 0.5s ease;
  width: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  &.toggle {
    width: 15rem;
  }
`;

const Options = styled.div`
  transition: 0.5s ease;
  width: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  &.toggle {
    width: 40rem;
  }
`;

const Option = styled.li`
  list-style: none;
  font-size: 0;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    border-bottom: 2px solid black;
  }
  span {
    font-weight: bold;
    color: #01c915;
  }
  &.toggle {
    font-size: 1.6rem;
  }
`;

const Color = styled.div`
  border-radius: 50%;
  width: 0rem;
  height: 0rem;
  transition: 0.5s ease;
  cursor: pointer;
  &.toggle {
    width: 2.5rem;
    height: 2.5rem;
    transition: 0.5s ease;
  }
  &.purple {
    background: #dc009e;
  }
  &.yellow {
    background: #ffc700;
  }
  &.green {
    background: #01c915;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  margin: 0 1rem;
  transition: 0.5s ease;
  z-index: 3;
  &:hover {
    transform: scale(1.2);
  }
`;

export default Modal;
