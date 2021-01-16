import React, { useState } from "react";
import styled from "styled-components";
import DarkModeIcon from "../images/DarkModeIcon.svg";
import DarkModeIconWhite from "../images/DarkModeIconWhite.svg";
import AddIcon from "../images/AddIcon.svg";
import HomeIcon from "../images/Home.svg";
import HomeIconWhite from "../images/HomeWhite.svg";
import BackIcon from "../images/Back.svg";
import BackIconWhite from "../images/BackWhite.svg";
import { useDispatch, useSelector } from "react-redux";

const Modal = () => {
  const [showOptions, setShowOptions] = useState(false);
  const toggleDarkMode = useSelector((state) => state.toggleDarkMode);

  const dispatch = useDispatch();

  return (
    <ModalWrapper className={toggleDarkMode && "darkMode"}>
      <Icon
        src={toggleDarkMode ? HomeIconWhite : HomeIcon}
        onClick={() => dispatch({ type: "BACK" })}
      />
      <Icon
        src={toggleDarkMode ? DarkModeIconWhite : DarkModeIcon}
        onClick={() => {
          dispatch({ type: "DARKMODE" });
        }}
      />
      <Icon src={AddIcon} onClick={() => setShowOptions(!showOptions)} />
      <Options
        className={showOptions ? `toggle` : toggleDarkMode && " darkMode"}
      >
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
        <Icon
          src={toggleDarkMode ? BackIconWhite : BackIcon}
          onClick={() => setShowOptions(false)}
        />
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
  &.darkMode {
    background: #353535;
  }
  @media (max-width: 820px) {
    width: 100%;
    z-index: 20;
    border-radius: 0;
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
      background: #01c915;
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
  transition: 0.3s ease;
  color: #01c915;
  &:hover {
    transform: scale(0.9);
    transition: 0.3s ease;
  }
  span {
    font-weight: bold;
    @media (max-width: 820px) {
      color: black;
    }
  }
  &.toggle {
    font-size: 1.6rem;
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
