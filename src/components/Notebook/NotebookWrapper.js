import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import xMark from "../../images/X-Mark.svg";
import NotebookList from "./NotebookList";
import NotebookForm from "./NotebookForm";

const NotebookWrapper = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);

  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [note, setNote] = useState([]);

  // useEffect(() => {
  //   getNotes();
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("notes", JSON.stringify(note));
  // }, [note]);

  // const getNotes = () => {
  //   if (localStorage.getItem("notes") === null) {
  //     localStorage.setItem("notes", JSON.stringify([]));
  //   } else {
  //     let taskLocal = JSON.parse(localStorage.getItem("notes"));
  //     setNote(taskLocal);
  //   }
  // };

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
        <Icon src={xMark} onClick={() => dispatch({ type: "BACK" })} />
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  transition: 0.5s ease;
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
    display: flex;
    opacity: 1;
    background-color: #f6f6f6;
    width: 70%;
    height: 30rem;
    transition: 0.5s ease;
    pointer-events: all;
  }
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
  opacity: 0;
  z-index: 2;
  display: none;
  transition: 0.5s ease;
  &.toggle {
    opacity: 1;
    width: 80%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease;
  }
`;

export default NotebookWrapper;
