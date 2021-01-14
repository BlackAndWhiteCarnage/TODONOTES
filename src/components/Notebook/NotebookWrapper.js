import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import BackIcon from "../../images/Back.svg";
import NotebookList from "./NotebookList";
import NotebookForm from "./NotebookForm";

const NotebookWrapper = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);

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
      <Wrapper className={toggle === 2 ? "toggle" : "toggleOut"}>
        <NotebookForm
          note={note}
          setNote={setNote}
          inputTitle={inputTitle}
          setInputTitle={setInputTitle}
          inputDesc={inputDesc}
          setInputDesc={setInputDesc}
        />
        <Icon src={BackIcon} onClick={() => dispatch({ type: "BACK" })} />
      </Wrapper>
      <NotebooksListWrapper className={toggle === 4 && "toggle"}>
        <NotebookList note={note} setNote={setNote} />
      </NotebooksListWrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: none;
  width: 0;
  transition: 0.5s ease;
  position: absolute;
  pointer-events: none;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  z-index: 5;
  transition: 0.5s ease;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  label {
    font-size: 2.4rem;
    cursor: pointer;
  }
  &.toggle {
    display: flex;
    opacity: 1;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
    border-radius: 10px;
    width: 70%;
    height: 30rem;
    transition: 0.5s ease;
    pointer-events: all;
    @media screen and (max-width: 820px) {
      width: 95%;
      label {
        width: 95%;
        margin-top: 2rem;
      }
    }
  }
`;

const Icon = styled.img`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 2.5rem;
  cursor: pointer;
  transition: 0.5s ease;
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

const NotebooksListWrapper = styled.div`
  opacity: 0;
  z-index: 2;
  display: none;
  transition: 0.5s ease;
  &.toggle {
    opacity: 1;
    width: 100%;
    height: 100vh;
    display: flex;
    transition: 0.5s ease;
  }
`;

export default NotebookWrapper;
