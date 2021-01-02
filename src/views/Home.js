import React, { useRef, useState } from "react";
import styled from "styled-components";
import Logo from "../images/Logo.svg";
import Hero from "../images/Hero.png";
import AddIcon from "../images/AddIcon.svg";
import DarkModeIcon from "../images/DarkModeIcon.svg";
import ColorIcon from "../images/ColorIcon.svg";

const Home = () => {
  const [toggleOptions, setToggleOptions] = useState(false);
  const [showColors, setShowColors] = useState(false);
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
  // }, 4000);

  return (
    <HomeWrapper>
      <Modal>
        <Icon src={ColorIcon} onClick={() => setShowColors(!showColors)} />
        <Icon src={DarkModeIcon} />
        <Icon src={AddIcon} />
        <Colors className={showColors && "toggle"}>
          <Color className={showColors && "toggle purple"} />
          <Color className={showColors && "toggle yellow"} />
          <Color className={showColors && "toggle green"} />
        </Colors>
      </Modal>
      <SideBarWrapper>
        <SideBar>
          <LogoWrapper src={Logo} />
          <List>
            <ListItem>Twoje Notatki</ListItem>
            <ListItem>Listy Zadań</ListItem>
            <ListItem>Kosz</ListItem>
          </List>
        </SideBar>
      </SideBarWrapper>
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
      <HeroImage src={Hero} />
      <NavBar>
        <LogoWrapper src={Logo} />
        <Burger>
          <Line />
          <Line />
          <Line />
        </Burger>
      </NavBar>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #ededed;
  display: flex;
`;

const Modal = styled.div`
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

const SideBarWrapper = styled.div`
  min-width: 15rem;
  height: 100vh;
  background: #fff;
  box-shadow: 5px 0px 20px 10px rgba(0, 0, 0, 0.2);
  z-index: 2;
  @media (max-width: 820px) {
    display: none;
  }
`;

const SideBar = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

const LogoWrapper = styled.img`
  width: 7rem;
  height: 7rem;
  z-index: 2;
`;

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

const List = styled.ul`
  list-style: none;
  font-weight: bold;
`;

const ListItem = styled.li`
  margin: 3rem 0rem 1rem 0;
  white-space: nowrap;
  font-size: 1.6rem;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    color: #01c915;
    transition: 0.2s ease;
  }
`;

const NavBar = styled.nav`
  display: none;
  @media (max-width: 820px) {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5rem;
    background-color: #fff;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const Burger = styled.div`
  width: 3.5rem;
  height: 2.5rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Line = styled.div`
  width: 100%;
  height: 0.3rem;
  background-color: black;
`;

export default Home;
