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
              className={toggleNoteList && "toggle"}
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
    background: rgba(0, 0, 0, 0.7);
    right: 0;
    position: fixed;
    z-index: 5;
    padding: 5rem;
    flex-direction: column;
    align-items: center;
    width: 100%;
    transition: 0.5s ease;
    overflow-y: scroll;
  }
`;
const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background: #fff;
  border-radius: 0.5rem;
  height: 10rem;
  &.toggle {
    margin-left: auto;
    padding: 1rem;
    width: 80%;
    height: auto;
  }
`;
const Icon = styled.img`
  position: absolute;
  top: 0.5rem;
  right: -0.5rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: 0.5s ease;
  border-radius: 50%;
  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease;
  }
  &.toggle {
    right: 3rem;
    pointer-events: all;
    transition: 1s ease;
    width: 2.5rem;
    height: 2.5rem;
  }
`;
const TitleInput = styled.input`
  border: none;
  font-size: 1.6rem;
  font-weight: bold;
  background: none;
  border-bottom: 3px solid #01c915;
  &.toggle {
    background: #e8e8e8;
    font-size: 2.4rem;
    width: 60%;
    transition: 0.5s ease;
    padding: 0.5rem;
  }
`;

const DescInput = styled.textarea`
  border: none;
  background: none;
  margin-top: 0.5rem;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
  resize: none;
  &.toggle {
    background: #e8e8e8;
    font-size: 2.4rem;
    padding: 1rem;
    overflow-y: scroll;
    margin-top: 2rem;
    width: 90%;
    height: 25rem;
    transition: 0.5s ease;
  }
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  width: 50%;
  align-items: center;
  cursor: pointer;
  transition: 0.5s ease;
  margin-left: 1rem;
  &.toggle {
    margin-left: 0;
    margin-top: 2rem;
    margin-bottom: 5rem;
    width: 95%;
    height: 30rem;
    transition: 0.5s ease;
  }
`;

export default NoteForm;
