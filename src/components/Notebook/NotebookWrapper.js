import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import BackIcon from "../../images/Back.svg";
import BackIconWhite from "../../images/BackWhite.svg";
import NotebookList from "./NotebookList";
import NotebookForm from "./NotebookWrapperForm";

const NotebookWrapper = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);
  const toggleDarkMode = useSelector((state) => state.toggleDarkMode);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [note, setNote] = useState([]);

  useEffect(() => {
    getNotebooks();
  }, []);

  useEffect(() => {
    localStorage.setItem("notebooks", JSON.stringify(note));
  }, [note]);

  const getNotebooks = () => {
    if (localStorage.getItem("notebooks") === null) {
      localStorage.setItem("notebooks", JSON.stringify([]));
    } else {
      let notebooksLocal = JSON.parse(localStorage.getItem("notebooks"));
      setNote(notebooksLocal);
    }
  };
  return (
    <>
      <NotebookFormWrapper
        className={toggle === 2 && `toggle ${toggleDarkMode && " darkMode"}`}
      >
        <NotebookForm
          note={note}
          setNote={setNote}
          inputTitle={inputTitle}
          setInputTitle={setInputTitle}
          inputDesc={inputDesc}
          setInputDesc={setInputDesc}
        />
        <Icon
          src={toggleDarkMode ? BackIconWhite : BackIcon}
          onClick={() => dispatch({ type: "BACK" })}
        />
      </NotebookFormWrapper>
      <NotebookListWrapper className={toggle === 4 && "toggle"}>
        <NotebookList note={note} setNote={setNote} />
      </NotebookListWrapper>
    </>
  );
};

const NotebookFormWrapper = styled.div`
  display: none;
  label {
    font-size: 2.4rem;
    cursor: pointer;
  }
  &.toggle {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    width: 70%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
    border-radius: 10px;
    transition: 0.5s ease;
    z-index: 5;
    &.darkMode {
      background: rgba(0, 0, 0, 0.4);
    }
    @media screen and (max-width: 820px) {
      width: 95%;
      label {
        width: 95%;
        margin-top: 1rem;
      }
    }
  }
`;

const NotebookListWrapper = styled.div`
  display: none;
  z-index: 2;
  &.toggle {
    width: 100%;
    height: 100vh;
    display: flex;
  }
`;

const Icon = styled.img`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 2.5rem;
  cursor: pointer;
  transition: 0.5s ease;
  &::selection {
    background: none;
  }
  &:hover {
    transition: 0.5s ease;
    transform: scale(1.2) rotate(-360deg);
  }
  @media (max-width: 820px) {
    width: 2rem;
    top: 0.5rem;
    right: 0.5rem;
  }
`;

export default NotebookWrapper;
