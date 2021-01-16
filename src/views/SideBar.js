import React from "react";
import styled from "styled-components";
import Logo from "../images/Logo.svg";
import LogoWhite from "../images/LogoWhite.svg";
import { useDispatch, useSelector } from "react-redux";
import NotebookIcon from "../images/NotebookIcon.svg";
import TaskIcon from "../images/TaskIcon.svg";

const Sidebar = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);
  const toggleDarkMode = useSelector((state) => state.toggleDarkMode);

  return (
    <SideBarWrapper className={toggleDarkMode && "darkMode"}>
      <SideBar>
        <LogoWrapper
          src={
            !toggleDarkMode
              ? toggle === 0
                ? Logo
                : toggle === 4
                ? NotebookIcon
                : toggle === 3
                ? TaskIcon
                : Logo
              : toggle === 0
              ? LogoWhite
              : toggle === 4
              ? NotebookIcon
              : toggle === 3
              ? TaskIcon
              : LogoWhite
          }
          onClick={() => dispatch({ type: "BACK" })}
        />
        <List>
          <ListItem onClick={() => dispatch({ type: "NOTEBOOKSLISTS" })}>
            Notatniki
          </ListItem>
          <ListItem onClick={() => dispatch({ type: "ADDTASK" })}>
            Zadania
          </ListItem>
        </List>
      </SideBar>
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled.div`
  min-width: 10rem;
  height: 100vh;
  background: #fff;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  z-index: 3;
  &.darkMode {
    background: #353535;
    color: white;
  }
  @media (max-width: 820px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3.5rem;
    width: 100%;
  }
`;

const SideBar = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  z-index: 2;
  @media (max-width: 820px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  font-weight: bold;
  @media (max-width: 820px) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
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
  @media (max-width: 820px) {
    margin: 0;
    margin-left: 1rem;
    padding: 0.5rem 0.1rem;
  }
`;

const LogoWrapper = styled.img`
  cursor: pointer;
  width: 100%;
  height: 6rem;
  z-index: 2;
  margin-top: 1rem;
  @media (max-width: 820px) {
    width: 5rem;
    height: 80%;
    margin: 0;
  }
`;

export default Sidebar;
