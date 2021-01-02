import React from "react";
import styled from "styled-components";
import Logo from "../images/Logo.svg";

const Navbar = () => {
  return (
    <NavBar>
      <LogoWrapper src={Logo} />
      <Burger>
        <Line />
        <Line />
        <Line />
      </Burger>
    </NavBar>
  );
};

const LogoWrapper = styled.img`
  width: 7rem;
  height: 7rem;
  z-index: 2;
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

export default Navbar;
