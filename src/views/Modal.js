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
  const dispatch = useDispatch();
  const [showOptions, setShowOptions] = useState(false);
  const toggleDarkMode = useSelector((state) => state.toggleDarkMode);

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
          onClick={() => {
            dispatch({ type: "NOTEBOOKTOGGLE" });
            setShowOptions(false);
          }}
        >
          notatnik
        </Option>
        <Option
          onClick={() => {
            dispatch({ type: "TASKTOGGLE" });
            setShowOptions(false);
          }}
        >
          zadanie
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
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 3.5rem;
  background: #fff;
  z-index: 3;
  box-shadow: 5px 0px 20px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 0 10px;
  &.darkMode {
    background: #1d1d1d;
  }
  @media (max-width: 820px) {
    width: 100%;
    z-index: 20;
    border-radius: 0;
  }
`;

const Options = styled.div`
  transition: 0.5s ease;
  display: none;
  align-items: center;
  justify-content: space-around;
  &.toggle {
    display: flex;
    width: 20rem;
    @media (max-width: 820px) {
      display: flex;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      font-size: 1.2rem;
      background: #01c915;
      z-index: 22;
    }
  }
`;

const Option = styled.li`
  list-style: none;
  cursor: pointer;
  color: #01c915;
  font-weight: bold;
  font-size: 1.6rem;
  &:hover {
    transform: scale(0.9);
    transition: 0.3s ease;
  }
  @media (max-width: 820px) {
    color: black;
  }
`;

const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  margin: 0 1rem;
  transition: 0.5s ease;
  z-index: 3;
  &::selection {
    background: none;
  }
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
