import React from "react";
import styled from "styled-components";
import Logo from "../images/Logo.svg";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <SideBarWrapper>
      <SideBar>
        <LogoWrapper src={Logo} />
        <List>
          <ListItem>Notatniki</ListItem>
          <ListItem onClick={() => dispatch({ type: "ADDTASK" })}>
            Zadania
          </ListItem>
          <ListItem>Kosz</ListItem>
        </List>
      </SideBar>
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled.div`
  min-width: 15rem;
  height: 100vh;
  background: #fff;
  box-shadow: 5px 0px 20px 10px rgba(0, 0, 0, 0.2);
  z-index: 3;
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

const LogoWrapper = styled.img`
  width: 7rem;
  height: 7rem;
  z-index: 2;
`;

export default Sidebar;
