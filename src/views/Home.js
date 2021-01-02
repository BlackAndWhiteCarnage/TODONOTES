import React from "react";
import styled from "styled-components";
import Logo from "../images/Logo.svg";
import Hero from "../images/Hero.png";
import AddIcon from "../images/AddIcon.svg";

const Home = () => {
  return (
    <HomeWrapper>
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
          Dodawaj Jednym Kliknięciem <span>notatniki</span>
        </Header>
        <Icon src={AddIcon} />
      </HeaderWrapper>
      <HeroImage src={Hero} />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #ededed;
  display: flex;
`;

const SideBarWrapper = styled.div`
  min-width: 15rem;
  height: 100vh;
  background: #fff;
  box-shadow: 5px 0px 20px 10px rgba(0, 0, 0, 0.15);
  z-index: 2;
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
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

const Icon = styled.img`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
`;

const Header = styled.h1`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.6rem;
  display: flex;
  flex-direction: column;
  font-family: "Bungee", cursive;
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
  cursor: pointer;
`;

export default Home;
