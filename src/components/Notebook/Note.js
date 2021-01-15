import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import xMark from "../../images/X-Mark.svg";
import ArrowIn from "../../images/arrow-in.svg";
import ArrowOut from "../../images/arrow-out.svg";
import AddIcon from "../../images/AddIcon.svg";
import NoteForm from "./NoteForm";

const Note = ({ title, description, note, notes, setNote, date }) => {
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
    <Wrapper>
      <InfoWrapper
        className={
          toggleNoteList
            ? `toggle ${toggleDarkMode && " darkMode"}`
            : toggleDarkMode && " darkMode"
        }
      >
        <NoteInfoWrapper className={toggleNoteList && "toggle"}>
          <NoteHeader>{title}</NoteHeader>
          <NoteDesc>{description}</NoteDesc>
          <p>Ilość notatek: {copy.length}</p>
          <p>Data dodania: {date}</p>
        </NoteInfoWrapper>
        <IconWrapper
          className={toggleNoteList ? `toggle` : toggleDarkMode && " darkMode"}
        >
          <Icon src={AddIcon} onClick={addNoteHandler} />
          <Icon
            src={toggleNoteList ? ArrowOut : ArrowIn}
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
          <DeleteInfo className={deleteInf && "toggle"}>
            <Btn onClick={deleteHandler}>Usuń</Btn>
            <Btn onClick={() => setDeleteInf(false)}>Anuluj</Btn>
          </DeleteInfo>
        </IconWrapper>
      </InfoWrapper>
      <>
        <NoteForm
          setInputTitle={setInputTitle}
          setInputDesc={setInputDesc}
          copy={copy}
          setNote={setNote}
          note={note}
          toggleNoteList={toggleNoteList}
          setToggleNoteList={setToggleNoteList}
          setCopy={setCopy}
        />
      </>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  transition: 0.5s ease;
  &:first-child {
    margin-top: 4rem;
  }
  &:last-child {
    margin-bottom: 4rem;
  }
`;
const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  height: 10rem;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 10px;
  margin: 1rem;
  min-width: 20rem;
  &.darkMode {
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
  }
  &.toggle {
    position: fixed;
    min-width: 5rem;
    transition: 0.5s ease;
    top: 0;
    height: 10rem;
    z-index: 6;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    &.darkMode {
      background: #4e4e4e;
    }
    @media screen and (max-width: 820px) {
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      width: 100%;
      height: 8rem;
      margin: 0;
      padding: 1rem;
      z-index: 6;
      border-radius: 0;
    }
  }
  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;
const NoteInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  overflow: hidden;
  p {
    width: 100%;
    font-size: 1rem;
  }
  &.toggle {
    display: none;
  }
`;
const NoteHeader = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const NoteDesc = styled.h4`
  font-size: 1.4rem;
  font-weight: 400;
  width: 70%;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const IconWrapper = styled.div`
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
    background: #4e4e4e;
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
      justify-content: space-around;
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
  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease;
  }
  &.checked {
    background: #01c915;
  }
  &.deleteBtn {
    display: none;
  }
`;
const DeleteInfo = styled.div`
  display: none;
  &.toggle {
    position: fixed;
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
    background: rgba(255, 255, 255, 0.8);
    overflow: hidden;
    /* @media screen and (max-width: 820px) {
      display: none;
    } */
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

export default Note;
