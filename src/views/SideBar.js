import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../images/Logo.svg";
import LogoWhite from "../images/LogoWhite.svg";
import NotebookIcon from "../images/NotebookIcon.svg";
import TaskIcon from "../images/TaskIcon.svg";

const Sidebar = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);
  const toggleDarkMode = useSelector((state) => state.toggleDarkMode);

  return (
    <SideBarWrapper className={toggleDarkMode && "darkMode"}>
      <SideBar>
        <LogoImage
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
  z-index: 3;
  box-shadow: 5px 0px 20px 10px rgba(0, 0, 0, 0.2);
  &.darkMode {
    background: #1d1d1d;
    color: #fff;
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

const LogoImage = styled.img`
  cursor: pointer;
  width: 100%;
  height: 6rem;
  z-index: 2;
  margin-top: 1rem;
  &::selection {
    background: none;
  }
  @media (max-width: 820px) {
    width: 5rem;
    height: 80%;
    margin: 0;
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
  margin-top: 2rem;
  white-space: nowrap;
  font-size: 1.6rem;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    color: #01c915;
    transition: 0.2s ease;
  }
  @media (max-width: 820px) {
    margin: 0 0 0 1rem;
  }
`;

export default Sidebar;
