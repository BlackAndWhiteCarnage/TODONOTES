import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../images/Logo.svg";
import DarkModeIcon from "../images/DarkModeIcon.svg";
import ColorIcon from "../images/ColorIcon.svg";
import AddIcon from "../images/AddIcon.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <NavBar>
      <LogoWrapper src={Logo} />
      <Burger onClick={() => setShowMenu(!showMenu)}>
        <Line className={showMenu && "toggle"} />
        <Line className={showMenu && "toggle"} />
        <Line className={showMenu && "toggle"} />
      </Burger>
      <NavWrapper className={showMenu && "toggle"}>
        <IconsWrapper className={showMenu && "toggle"}>
          <Icon src={DarkModeIcon} />
          <Icon src={ColorIcon} />
          <Icon src={AddIcon} />
        </IconsWrapper>
        <li>Notatniki</li>
        <li>Zadania</li>
        <li>Kosz</li>
      </NavWrapper>
    </NavBar>
  );
};

const LogoWrapper = styled.img`
  width: 7rem;
  height: 7rem;
  z-index: 2;
`;

const IconsWrapper = styled.div`
  width: 100%;
  opacity: 0;
  pointer-events: none;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: 0.3s ease;
  &.toggle {
    opacity: 1;
    pointer-events: all;
    transition: 1s ease;
  }
`;

const Icon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-top: 1rem;
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
  transition: 0.5s ease;
  &.toggle {
    transform: scale(1.3);
    transition: 0.5s ease;
  }
`;

const NavWrapper = styled.ul`
  position: absolute;
  width: 100%;
  height: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease;
  li {
    opacity: 0;
  }
  &.toggle {
    height: 90vh;
    transition: 0.3s ease;
    li {
      font-size: 2.4rem;
      margin-bottom: 2rem;
      margin-top: 2rem;
      list-style: none;
      opacity: 1;
    }
  }
`;

export default Navbar;
