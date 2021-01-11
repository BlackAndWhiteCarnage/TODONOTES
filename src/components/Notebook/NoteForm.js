import React, { useState } from "react";
import styled from "styled-components";
import xMark from "../../images/X-Mark.svg";

const NoteForm = ({
  copy,
  setCopy,
  setInputTitle,
  setInputDesc,
  toggleNoteList,
  setToggleNoteList,
}) => {
  return (
    <NoteWrapper className={toggleNoteList && "toggle"}>
      {copy.map((item) => (
        <Wrap key={item.uuid} className={toggleNoteList && "toggle"}>
          <FormWrapper className={toggleNoteList && "toggle"}>
            <TitleInput
              className={toggleNoteList && "toggle"}
              value={item.noteTitle}
              type="text"
              onChange={(e) => {
                item.noteTitle = e.target.value;
                setInputTitle(e.target.value);
              }}
            />
            <DescInput
              className={toggleNoteList && "toggle"}
              value={item.noteDesc}
              onChange={(e) => {
                item.noteDesc = e.target.value;
                setInputDesc(e.target.value);
              }}
              type="text"
            />
            <Icon
              src={xMark}
              onClick={() => {
                let index = copy.indexOf(item);
                if (index > -1) {
                  copy.splice(index, 1);
                }
                setCopy(
                  copy.map((x) => {
                    return {
                      ...x,
                    };
                  })
                );
              }}
            />
          </FormWrapper>
          {/* <Options className={toggleNoteList && "toggle"}> */}
          {/* </Options> */}
        </Wrap>
      ))}
    </NoteWrapper>
  );
};

// const Options = styled.div`
//   position: absolute;
//   right: 10%;
//   opacity: 0;
//   transition: 0.5s ease;
//   &.toggle {
//     background: #ffffff;
//     opacity: 1;
//     transition: 0.5s ease;
//   }
// `;
const NoteWrapper = styled.div`
  width: 30%;
  transition: 0.5s ease;
  display: flex;
  &.toggle {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    z-index: 5;
    flex-direction: column;
    background: #f1f1f1;
    width: 100%;
    transition: 0.5s ease;
    overflow-y: scroll;
  }
`;
const FormWrapper = styled.div`
  width: 80%;
  display: flex;
  margin-left: auto;
  flex-direction: column;
  justify-content: center;
`;
const Icon = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: 0.5s ease;
  border-radius: 50%;
  /* opacity: 0; */
  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease;
  }
  &.toggle {
    background: #ffffff;
    opacity: 1;
    transition: 0.5s ease;
  }
`;
const TitleInput = styled.input`
  border: none;
  font-size: 2.4rem;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.6);
  &.toggle {
    border-radius: 1rem;
    width: 40%;
    transition: 0.5s ease;
    box-shadow: -5px -5px 10px 5px rgb(255, 255, 255),
      5px 5px 10px 5px rgb(163, 163, 163);
  }
`;

const DescInput = styled.textarea`
  border: none;
  background: rgba(255, 255, 255, 0.6);
  font-size: 2.4rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
  resize: none;
  &.toggle {
    border-radius: 1rem;
    overflow-y: scroll;
    margin-top: 2rem;
    width: 90%;
    height: 23rem;
    transition: 0.5s ease;
    box-shadow: -5px -5px 10px 5px rgb(255, 255, 255),
      5px 5px 10px 5px rgb(163, 163, 163);
  }
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  width: 50%;
  align-items: center;
  transition: 0.5s ease;
  justify-content: center;
  &.toggle {
    margin-top: 3rem;
    width: 95%;
    height: 30rem;
    transition: 0.5s ease;
  }
`;

export default NoteForm;
