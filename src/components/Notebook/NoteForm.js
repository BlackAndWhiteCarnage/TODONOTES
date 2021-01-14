import React, { useEffect } from "react";
import styled from "styled-components";
import xMark from "../../images/X-Mark.svg";

const NoteForm = ({
  copy,
  setCopy,
  setInputTitle,
  setInputDesc,
  toggleNoteList,
  setNote,
  note,
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
                setNote(
                  note.map((el) => {
                    return {
                      ...el,
                    };
                  })
                );
              }}
            />
            <DescInput
              className={toggleNoteList && "toggle"}
              value={item.noteDesc}
              onChange={(e) => {
                item.noteDesc = e.target.value;
                setInputDesc(e.target.value);
                setNote(
                  note.map((el) => {
                    return {
                      ...el,
                    };
                  })
                );
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
                setNote(
                  note.map((el) => {
                    return {
                      ...el,
                    };
                  })
                );
              }}
            />
          </FormWrapper>
        </Wrap>
      ))}
    </NoteWrapper>
  );
};

const NoteWrapper = styled.div`
  width: 50%;
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
    @media screen and (max-width: 820px) {
      padding: 0;
    }
  }
  @media screen and (max-width: 820px) {
    width: 0;
  }
`;
const FormWrapper = styled.div`
  position: relative;
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
    &:last-child {
      margin-bottom: 5rem;
    }
    @media screen and (max-width: 820px) {
      width: 100%;
      padding: 1rem;
      margin-right: 1rem;
    }
  }
`;
const Icon = styled.img`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
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
    top: 2rem;
    right: 2rem;
    pointer-events: all;
    width: 2.5rem;
    height: 2.5rem;
    @media screen and (max-width: 820px) {
      width: 2rem;
      height: 2rem;
      right: 2rem;
    }
  }
  @media screen and (max-width: 820px) {
    width: 0;
  }
`;
const TitleInput = styled.input`
  border: none;
  font-size: 1.6rem;
  font-weight: bold;
  background: none;
  border-bottom: 3px solid #01c915;
  &.toggle {
    background: transparent;
    font-size: 2.4rem;
    width: 60%;
    transition: 0.5s ease;
    padding: 0.5rem;
    @media screen and (max-width: 820px) {
      width: 90%;
      font-size: 1.6rem;
    }
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
    background: #f1f1f1;
    font-size: 2.4rem;
    padding: 1rem;
    overflow-y: scroll;
    margin-top: 2rem;
    width: 100%;
    height: 25rem;
    transition: 0.5s ease;
    @media screen and (max-width: 820px) {
      width: 100%;
      font-size: 1.2rem;
      padding: 0;
    }
  }
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  width: 50%;
  align-items: center;
  transition: 0.5s ease;
  margin-left: 1rem;
  &.toggle {
    margin-left: 0;
    margin-top: 2rem;
    margin-bottom: 5rem;
    width: 95%;
    height: 30rem;
    transition: 0.5s ease;
    @media screen and (max-width: 820px) {
      position: relative;
      height: auto;
      top: 25%;
      width: 100%;
      margin: 1rem;
    }
  }
`;

export default NoteForm;
