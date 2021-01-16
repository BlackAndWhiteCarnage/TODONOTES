import React, { useState } from "react";
import styled from "styled-components";
import HeroImg3 from "../images/Hero3.jpg";
import AddIcon from "../images/AddIcon.svg";
import TaskWrapper from "../components/Task/TaskWrapper";
import NotebookWrapper from "../components/Notebook/NotebookWrapper";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";

const Hero = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);
  const toggleDarkMode = useSelector((state) => state.toggleDarkMode);
  const [toggleOptions, setToggleOptions] = useState(false);
  let [text, setText] = useState(0);

  if (toggle === 0) {
    setTimeout(() => {
      setText(text < 2 ? text + 1 : (text = 0));
    }, 3000);
  }

  return (
    <Wrapper className={toggleDarkMode && "darkMode"}>
      <HeaderWrapper className={toggle && "toggle"}>
        <Header>
          Dodawaj.{" "}
          <span className={text === 0 ? "toggle" : "toggleOut"}>notatki</span>
          <span className={text === 1 ? "toggle" : "toggleOut"}>zadania</span>
          <span className={text === 2 ? "toggle" : "toggleOut"}>notatniki</span>
        </Header>
        <IconWrapper>
          <MainIcon
            src={AddIcon}
            onClick={() => setToggleOptions(!toggleOptions)}
          />
        </IconWrapper>
        <ButtonsWrapper className={toggleOptions && "toggle"}>
          <Button
            value={"Notatnik"}
            click={() => {
              dispatch({ type: "NOTEBOOKTOGGLE" });
              setToggleOptions(false);
            }}
          />
          <Button
            value={"Zadanie"}
            click={() => {
              dispatch({ type: "TASKTOGGLE" });
              setToggleOptions(false);
            }}
          />
        </ButtonsWrapper>
      </HeaderWrapper>
      <TaskWrapper />
      <NotebookWrapper />
      <HeroImage src={HeroImg3} className={toggleDarkMode && "darkMode"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &.darkMode {
    color: #fff;
  }
`;

const HeaderWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  border-radius: 10px;
  &.toggle {
    display: none;
  }
  @media (max-width: 820px) {
    width: 90%;
    height: 80%;
  }
`;

const Header = styled.h1`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10rem 0;
  font-size: 3.6rem;
  line-height: 4rem;
  span {
    position: absolute;
    bottom: -4rem;
    &::selection {
      background: none;
    }
    &.toggle {
      opacity: 1;
      transition: 0.5s ease;
    }
    &.toggleOut {
      transition: 0.5s ease;
      opacity: 0;
      bottom: -10rem;
    }
    color: #01c915;
    font-family: "Montserrat", sans-serif;
  }
  @media screen and (max-width: 820px) {
    margin: 5rem 0;
    font-size: 2.4rem;
    line-height: 3rem;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  &::after {
    content: "";
    position: absolute;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    animation: Pulse ease 4s infinite;
    @media (max-width: 820px) {
      width: 3rem;
      height: 3rem;
    }
  }
  @keyframes Pulse {
    50% {
      box-shadow: 0px 0px 20px 10px #01c915;
      transform: scale(1.1);
    }
  }
`;

const MainIcon = styled.img`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  transition: 0.5s ease;
  z-index: 2;
  margin-bottom: 5rem;
  &::selection {
    background: none;
  }
  &:hover {
    transform: scale(1.3) rotate(-360deg);
    transition: 0.5s ease;
  }
  @media (max-width: 820px) {
    width: 3rem;
    height: 3rem;
    margin-bottom: 2.5rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: none;
  &.toggle {
    display: flex;
    @media screen and (max-width: 820px) {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }
`;

const HeroImage = styled.img`
  position: fixed;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  opacity: 0.7;
  z-index: 1;
  &.darkMode {
    filter: brightness(30%);
  }
`;

export default Hero;
