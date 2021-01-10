import React, { useState } from "react";
import styled from "styled-components";
import xMarkTransparent from "../../images/X-Mark-Transparent.svg";
import ArrowDown from "../../images/Arrow-down.svg";
import AddIcon from "../../images/AddIcon.svg";
import NoteForm from "./NoteForm";

const Note = ({ title, description, note, notes, setNote }) => {
  const [toggleNoteList, setToggleNoteList] = useState(true);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [copy, setCopy] = useState(notes.notesItems);

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
    console.log("copy", copy);
    console.log("note", note);
    console.log("notes", notes);
  };

  return (
    <Wrapper className={`${notes.completed && "checked"}`}>
      <InfoWrapper>
        <NoteInfoWrapper>
          <NoteHeader>{title}</NoteHeader>
          <NoteDesc>{description}</NoteDesc>
        </NoteInfoWrapper>
        <IconWrapper>
          <Icon src={AddIcon} onClick={addNoteHandler} />
          <Icon
            src={ArrowDown}
            onClick={() => setToggleNoteList(!toggleNoteList)}
          />
          <Icon src={xMarkTransparent} onClick={deleteHandler} />
        </IconWrapper>
      </InfoWrapper>
      <>
        {toggleNoteList && (
          <NoteForm
            note={note}
            setNote={setNote}
            // key={item.uuid}
            // parentId={item.parentId}
            notes={notes}
            // title={item.noteTitle}
            // description={item.noteDesc}
            inputTitle={inputTitle}
            setInputTitle={setInputTitle}
            inputDesc={inputDesc}
            setInputDesc={setInputDesc}
            copy={copy}
            setCopy={setCopy}
          />
        )}
      </>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  min-height: 5rem;
  margin: 0.5rem 0;
  background: #f6f6f6;
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  transition: 0.5s ease;
  &.toggleNote {
    transition: 0.5s ease;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 5rem;
  width: 100%;
`;
const NoteInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const NoteHeader = styled.h2`
  margin-left: 1rem;
  font-size: 1.6rem;
  font-weight: bold;
  width: 50%;
`;
const NoteDesc = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  width: 50%;
`;

const IconWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
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

const ToggleNote = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: 0.5s ease;
  border-radius: 50%;
  position: absolute;
  right: 1rem;
  top: 5rem;
  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease;
  }
`;

export default Note;
