import React, { useState } from "react";
import styled from "styled-components";
import DarkModeIcon from "../images/DarkModeIcon.svg";
import ColorIcon from "../images/ColorIcon.svg";
import AddIcon from "../images/AddIcon.svg";
import HomeIcon from "../images/Home.svg";
import BackIcon from "../images/Back.svg";
import { useDispatch } from "react-redux";

const Modal = () => {
  const [showColors, setShowColors] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();

  return (
    <ModalWrapper>
      <Icon src={HomeIcon} onClick={() => dispatch({ type: "BACK" })} />
      <Icon src={ColorIcon} onClick={() => setShowColors(!showColors)} />
      <Colors className={showColors && "toggle"}>
        <Color
          className={showColors && "toggle purple"}
          onClick={() => setShowColors(false)}
        />
        <Color
          className={showColors && "toggle yellow"}
          onClick={() => setShowColors(false)}
        />
        <Color
          className={showColors && "toggle green"}
          onClick={() => setShowColors(false)}
        />
      </Colors>
      <Icon src={DarkModeIcon} />
      <Icon src={AddIcon} onClick={() => setShowOptions(!showOptions)} />
      <Options className={showOptions && "toggle"}>
        <Option
          className={showOptions && "toggle"}
          onClick={() => {
            dispatch({ type: "NOTEBOOKTOGGLE" });
            setShowOptions(false);
          }}
        >
          <span>notatnik</span>
        </Option>
        <Option
          className={showOptions && "toggle"}
          onClick={() => {
            dispatch({ type: "TASKTOGGLE" });
            setShowOptions(false);
          }}
        >
          <span>zadanie</span>
        </Option>
        <Icon src={BackIcon} onClick={() => setShowOptions(false)} />
      </Options>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: auto;
  height: 3.5rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 3;
  box-shadow: 5px 0px 20px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 0 10px;
  &.toggle {
    width: 20rem;
  }
  @media (max-width: 820px) {
    width: 100%;
    z-index: 20;
    border-radius: 0;
  }
`;

const Colors = styled.div`
  transition: 0.5s ease;
  width: 0;
  display: none;
  &.toggle {
    width: 15rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const Options = styled.div`
  transition: 0.5s ease;
  width: 0;
  display: none;
  align-items: center;
  justify-content: space-around;
  &.toggle {
    display: flex;
    width: 20rem;
    @media (max-width: 820px) {
      font-size: 1.2rem;
      position: absolute;
      width: 100%;
      height: 100%;
      background: #fff;
      z-index: 22;
      display: flex;
      align-items: center;
    }
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
    @media (max-width: 820px) {
      width: 2rem;
      height: 2rem;
    }
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
    transition: 0.5s ease;
    transform: scale(1.2) rotate(-360deg);
  }
  @media (max-width: 820px) {
    width: 2rem;
  }
`;

export default Modal;
