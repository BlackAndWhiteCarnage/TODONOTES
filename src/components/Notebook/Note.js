import React, { useState } from "react";
import styled from "styled-components";
import xMarkTransparent from "../../images/X-Mark-Transparent.svg";
import ArrowIn from "../../images/arrow-in.svg";
import ArrowOut from "../../images/arrow-out.svg";
import AddIcon from "../../images/AddIcon.svg";
import NoteForm from "./NoteForm";

const Note = ({ title, description, note, notes, setNote }) => {
  const [toggleNoteList, setToggleNoteList] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [copy, setCopy] = useState(notes.notesItems);
  const [deleteInf, setDeleteInf] = useState(false);

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
      <InfoWrapper className={toggleNoteList && "toggle"}>
        <NoteInfoWrapper>
          <NoteHeader>{title}</NoteHeader>
          <NoteDesc>{description}</NoteDesc>
          <h1>{copy.length}</h1>
        </NoteInfoWrapper>
        <IconWrapper>
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
            src={xMarkTransparent}
            onClick={() => setDeleteInf(!deleteInf)}
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
`;
const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  height: 10rem;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 10px;
  margin: 1rem;
  width: 10%;
  &.toggle {
    position: fixed;
    top: 0;
    height: 20%;
    z-index: 6;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
    border-radius: 10px;
  }
`;
const NoteInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;
const NoteHeader = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  width: 100%;
`;
const NoteDesc = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  width: 100%;
`;
const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.8);
  }
`;
const Btn = styled.button`
  width: 101%;
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
