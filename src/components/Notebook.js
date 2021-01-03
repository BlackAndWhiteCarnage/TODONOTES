import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import xMark from "../images/X-Mark.svg";
import NotebooksList from "./NotebooksList";
import Button from "./Button";

const Notebook = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);
  return (
    <>
      <NotebookWrapper className={toggle === 2 ? "toggle" : "toggleOut"}>
        <label htmlFor="Notebook">Nazwa Notatnika</label>
        <TitleInput id="Notebook" type="text" />
        <label htmlFor="Description">Opis</label>
        <DescriptionInput id="Description" type="text" />
        <Button
          value={"Dodaj"}
          click={() => dispatch({ type: "NOTEBOOKSLISTS" })}
        />
        <Icon src={xMark} onClick={() => dispatch({ type: "BACK" })} />
      </NotebookWrapper>
      <NotebooksListWrapper className={toggle === 4 ? "toggle" : "toggleOut"}>
        <NotebooksList />
      </NotebooksListWrapper>
    </>
  );
};

const NotebookWrapper = styled.div`
  opacity: 0;
  position: absolute;
  pointer-events: none;
  top: 50%;
  left: 20%;
  transform: translate(-0%, -50%);
  z-index: 5;
  transition: 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  button {
    margin: 0 4rem 1rem auto;
  }
  label {
    font-size: 2.4rem;
    margin: auto 0 0 4rem;
    cursor: pointer;
  }
  &.toggle {
    opacity: 1;
    background-color: #f6f6f6;
    width: 70%;
    height: 30rem;
    transition: 0.5s ease;
    pointer-events: all;
  }
`;

const TitleInput = styled.input`
  border: none;
  width: 90%;
  height: 2rem;
  margin: auto;
  font-size: 1.6rem;
  border-bottom: 3px solid #01c915;
  padding: 1rem 0;
`;

const DescriptionInput = styled.textarea`
  border: none;
  width: 90%;
  height: 8rem;
  margin: auto;
  font-size: 2rem;
  border-bottom: 3px solid #01c915;
  resize: none;
`;

const Icon = styled.img`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    transition: 0.5s ease;
    transform: scale(1.2) rotate(360deg);
  }
`;

const NotebooksListWrapper = styled.div`
  display: none;
  z-index: 2;
  &.toggle {
    width: 100%;
    height: 100vh;
    display: block;
  }
`;

export default Notebook;
