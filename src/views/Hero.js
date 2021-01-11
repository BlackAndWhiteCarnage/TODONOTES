import React, { useRef, useState } from "react";
import styled from "styled-components";
import HeroImg from "../images/Hero.png";
import HeroImg2 from "../images/Hero.jpg";
import HeroImg3 from "../images/Hero3.jpg";
import AddIcon from "../images/AddIcon.svg";
import TaskWrapper from "../components/Task/TaskWrapper";
import NotebookWrapper from "../components/Notebook/NotebookWrapper";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../components/Button";

const Hero = () => {
  const toggle = useSelector((state) => state.toggle);
  const dispatch = useDispatch();
  const [toggleOptions, setToggleOptions] = useState(false);
  const textToggle = useRef(String);
  const chooseOption = () => {
    setToggleOptions(!toggleOptions);
  };

  return (
    <Wrapper>
      <HeaderWrapper className={toggle && "toggle"}>
        <Header>
          Dodawaj Jednym Kliknięciem <span ref={textToggle}>zadania</span>
        </Header>
        <IconWrapper>
          <MainIcon src={AddIcon} onClick={chooseOption} />
        </IconWrapper>
        <ButtonsWrapper className={toggleOptions && "toggle"}>
          <Button
            value={"Notatnik"}
            click={() => dispatch({ type: "NOTEBOOKTOGGLE" })}
          />
          <Button
            value={"Zadanie"}
            click={() => dispatch({ type: "TASKTOGGLE" })}
          />
        </ButtonsWrapper>
      </HeaderWrapper>
      <TaskWrapper />
      <NotebookWrapper />
      <HeroImage src={HeroImg3} />
    </Wrapper>
  );
};

const HeroImage = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  &.toggle {
    display: none;
  }
  @media (max-width: 820px) {
    width: 100%;
    margin: auto;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainIcon = styled.img`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transition: 0.5s ease;
  z-index: 2;
  margin-bottom: 10rem;
  &:hover {
    transform: scale(1.4) rotate(360deg);
    transition: 0.5s ease;
  }
  @media (max-width: 820px) {
    width: 4rem;
    height: 4rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: none;
  transition: 0.5s ease;
  opacity: 0;
  pointer-events: none;
  &.toggle {
    display: flex;
    pointer-events: all;
    opacity: 1;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 5rem;
    height: 5rem;
    font-size: 5rem;
    position: absolute;
    border-radius: 50%;
    animation: Pulse ease 4s infinite;
    @media (max-width: 820px) {
      display: none;
    }
  }
  @keyframes Pulse {
    50% {
      box-shadow: 0px 0px 20px 10px #01c915;
      transform: scale(1.1);
    }
  }
`;

const Header = styled.h1`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10rem 0;
  font-size: clamp(3.4rem, 2.5vw, 3.6rem);
  display: flex;
  flex-direction: column;
  color: white;
  line-height: 4rem;
  span {
    color: #01c915;
    font-family: "Montserrat", sans-serif;
  }
`;

export default Hero;
