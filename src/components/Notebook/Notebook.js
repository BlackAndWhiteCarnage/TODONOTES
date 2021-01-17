import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import xMark from "../../images/X-Mark.svg";
import ArrowIn from "../../images/arrow-in.svg";
import ArrowInWhite from "../../images/arrow-inWhite.svg";
import ArrowOut from "../../images/arrow-outWhite.svg";
import ArrowOutWhite from "../../images/arrow-out.svg";
import AddIcon from "../../images/AddIcon.svg";
import Note from "./Note";

const Notebook = ({ title, description, note, notes, setNote, date }) => {
  const [toggleNoteList, setToggleNoteList] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [copy, setCopy] = useState(notes.notesItems);
  const [deleteInf, setDeleteInf] = useState(false);
  const toggleDarkMode = useSelector((state) => state.toggleDarkMode);

  const deleteHandler = () => {
    setNote(note.filter((el) => el.id !== notes.id));
  };

  const addNoteHandler = () => {
    setNote(
      note.map((el) => {
        return {
          ...el,
        };
      })
    );
    copy.push({
      noteTitle: "",
      noteDesc: "",
      uuid: Math.random() * 100,
      parentId: notes.id,
    });
    setToggleNoteList(true);
  };
  return (
    <NotebookWrapper>
      <NotebookInfoWrapper
        className={
          toggleNoteList
            ? `toggle ${toggleDarkMode && " darkMode"}`
            : toggleDarkMode && " darkMode"
        }
      >
        <NotebookInfo className={toggleNoteList && "toggle"}>
          <NoteHeader>{title}</NoteHeader>
          <NoteDescription>{description}</NoteDescription>
          <p className={toggleDarkMode && "darkMode"}>
            Ilość notatek: {copy.length}
          </p>
          <p className={toggleDarkMode && "darkMode"}>Data dodania: {date}</p>
        </NotebookInfo>
        <IconsWrapper
          className={toggleNoteList ? `toggle` : toggleDarkMode && " darkMode"}
        >
          <Icon src={AddIcon} onClick={addNoteHandler} />
          <Icon
            src={
              !toggleDarkMode
                ? toggleNoteList
                  ? ArrowOutWhite
                  : ArrowIn
                : toggleNoteList
                ? ArrowOut
                : ArrowInWhite
            }
            onClick={() => {
              copy.length > 0
                ? setToggleNoteList(!toggleNoteList)
                : setToggleNoteList(false);
            }}
          />
          <Icon
            src={xMark}
            onClick={() => setDeleteInf(!deleteInf)}
            className={toggleNoteList && "deleteBtn"}
          />
        </IconsWrapper>
        <DeleteInfoWrapper className={deleteInf && "toggle"}>
          <Btn onClick={deleteHandler}>Usuń</Btn>
          <Btn onClick={() => setDeleteInf(false)}>Anuluj</Btn>
        </DeleteInfoWrapper>
      </NotebookInfoWrapper>
      <Note
        setInputTitle={setInputTitle}
        setInputDesc={setInputDesc}
        copy={copy}
        setNote={setNote}
        note={note}
        toggleNoteList={toggleNoteList}
        setToggleNoteList={setToggleNoteList}
        setCopy={setCopy}
      />
    </NotebookWrapper>
  );
};

const NotebookWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  &:first-child {
    margin-top: 4rem;
  }
  &:last-child {
    margin-bottom: 4rem;
  }
  @media screen and (max-width: 820px) {
    height: 30rem;
  }
`;
const NotebookInfoWrapper = styled.div`
  position: relative;
  display: flex;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  height: 18rem;
  border-radius: 10px;
  min-width: 40rem;
  max-width: 40rem;
  margin: 1rem;
  &.darkMode {
    background: rgba(0, 0, 0, 0.4);
  }
  &.toggle {
    position: fixed;
    min-width: 5rem;
    transition: 0.5s ease;
    top: 0;
    height: 10rem;
    z-index: 6;
    background: #fff;
    &.darkMode {
      background: #1d1d1d;
    }
    @media screen and (max-width: 820px) {
      width: 100%;
      height: 7rem;
      margin: 0;
      padding: 0.5rem;
      z-index: 6;
      border-radius: 0;
    }
  }
  @media screen and (max-width: 820px) {
    min-width: 20rem;
    height: auto;
  }
`;

const NotebookInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  overflow: hidden;
  p {
    border-top: 2px solid black;
    width: 55%;
    font-size: 1rem;
    padding: 0.5rem 0;
    &.darkMode {
      border-top: 2px solid white;
    }
  }
  &.toggle {
    display: none;
  }
`;

const NoteHeader = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  width: 90%;
  font-family: "Lato", sans-serif;
`;

const NoteDescription = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  width: 70%;
  font-family: "Lato", sans-serif;
`;

const IconsWrapper = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.8);
  padding: 0.5rem;
  &.darkMode {
    background: #1d1d1d;
  }
  &.toggle {
    position: relative;
    align-items: center;
    background: none;
    width: 100%;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 820px) {
      flex-direction: row;
      align-items: flex-end;
    }
  }
`;

const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: 0.5s ease;
  border-radius: 50%;
  &::selection {
    background: none;
  }
  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease;
  }
  &.deleteBtn {
    display: none;
  }
`;

const DeleteInfoWrapper = styled.div`
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &.toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    left: 50%;
    top: 50%;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.7);
    overflow: hidden;
  }
`;

const Btn = styled.button`
  width: 100%;
  height: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 2.4rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transition: 0.5s ease;
    &:nth-child(1) {
      color: red;
    }
    &:nth-child(2) {
      color: #01c915;
    }
  }
`;

export default Notebook;
