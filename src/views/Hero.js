import React, { useRef, useState } from "react";
import styled from "styled-components";
import HeroImg from "../images/Hero.png";
import AddIcon from "../images/AddIcon.svg";

const Hero = () => {
  const [toggleOptions, setToggleOptions] = useState(false);
  const textToggle = useRef(String);
  const chooseOption = () => {
    setToggleOptions(!toggleOptions);
  };

  // setInterval(() => {
  //   if (textToggle.current.innerHTML === "notatniki") {
  //     textToggle.current.innerHTML = "zadania";
  //   } else if (textToggle.current.innerHTML === "zadania") {
  //     textToggle.current.innerHTML = "notatki";
  //   } else if (textToggle.current.innerHTML === "notatki")
  //     textToggle.current.innerHTML = "notatniki";
  // }, 1000);

  return (
    <>
      <HeaderWrapper>
        <Header>
          Dodawaj Jednym Kliknięciem <span ref={textToggle}>zadania</span>
        </Header>
        <IconWrapper>
          <MainIcon src={AddIcon} onClick={chooseOption} />
        </IconWrapper>
        <ButtonsWrapper className={toggleOptions && "toggle"}>
          <Button>Notatnik</Button>
          <Button>Zadanie</Button>
        </ButtonsWrapper>
      </HeaderWrapper>
      <HeroImage src={HeroImg} />
    </>
  );
};

const HeroImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  @media (max-width: 820px) {
    width: 100%;
    margin: auto;
  }
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
  display: flex;
  transition: 0.5s ease;
  opacity: 0;
  &.toggle {
    opacity: 1;
  }
`;

const Button = styled.button`
  width: 10rem;
  height: 4rem;
  font-size: clamp(1.6rem, 2.5vw, 2rem);
  font-weight: bold;
  border: none;
  margin: 1.5rem;
  color: #fff;
  background: #01c915;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    background: #fff;
    color: #01c915;
    transition: 0.5s ease;
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

const Header = styled.h1`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10rem 0;
  font-size: clamp(2.4rem, 2.5vw, 3.6rem);
  display: flex;
  flex-direction: column;
  line-height: 4rem;
  span {
    color: #01c915;
    font-family: "Montserrat", sans-serif;
  }
`;

export default Hero;
