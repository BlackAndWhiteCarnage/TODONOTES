import React from "react";
import styled from "styled-components";
import xMark from "../../images/X-Mark.svg";
import { useSelector } from "react-redux";

const Note = ({
  copy,
  setCopy,
  setInputTitle,
  setInputDesc,
  toggleNoteList,
  setNote,
  note,
}) => {
  const toggleDarkMode = useSelector((state) => state.toggleDarkMode);

  return (
    <NoteWrapper
      className={
        toggleNoteList
          ? `toggle ${toggleDarkMode && " darkMode"}`
          : toggleDarkMode && " darkMode"
      }
    >
      {copy.map((item) => (
        <Wrap key={item.uuid} className={toggleNoteList && "toggle"}>
          <FormWrapper
            className={
              toggleNoteList
                ? `toggle ${toggleDarkMode && " darkMode"}`
                : toggleDarkMode && " darkMode"
            }
          >
            <TitleInput
              className={
                toggleNoteList
                  ? `toggle ${toggleDarkMode && " darkMode"}`
                  : toggleDarkMode && " darkMode"
              }
              maxLength="60"
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
              className={
                toggleNoteList
                  ? `toggle ${toggleDarkMode && " darkMode"}`
                  : toggleDarkMode && " darkMode"
              }
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
  width: 70rem;
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
    &.darkMode {
      background: rgba(53, 53, 53, 0.8);
    }
    @media screen and (max-width: 820px) {
      padding: 0;
    }
  }
`;

const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  height: 85%;
  &.darkMode {
    background: #1d1d1d;
  }
  &.toggle {
    margin-left: 10rem;
    padding: 1rem;
    width: 90%;
    height: auto;
    &.darkMode {
      background: #1d1d1d;
    }
    &:last-child {
      margin-bottom: 10rem;
    }
    &:first-child {
      margin-top: 15rem;
    }
    @media screen and (max-width: 820px) {
      width: 100%;
      padding: 1rem;
      margin: 0.5rem;
      &:first-child {
        margin-top: 5rem;
      }
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
  &::selection {
    background: none;
  }
  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease;
  }
  &.toggle {
    @media screen and (max-width: 820px) {
      width: 2rem;
      height: 2rem;
    }
  }
`;
const TitleInput = styled.input`
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  background: none;
  border-bottom: 3px solid #01c915;
  font-family: "Lato", sans-serif;
  &:focus {
    outline: none;
  }
  &.darkMode {
    color: #fff;
  }
  &.toggle {
    font-size: 1.8rem;
    width: 80%;
    transition: 0.5s ease;
    padding: 0.5rem;
    &.darkMode {
      color: white;
    }
    @media screen and (max-width: 820px) {
      width: 90%;
      font-size: 1rem;
    }
  }
`;

const DescInput = styled.textarea`
  border: none;
  background: none;
  margin-top: 0.5rem;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
  resize: none;
  font-family: "Lato", sans-serif;
  &:focus {
    outline: none;
  }
  &.darkMode {
    color: white;
  }
  &.toggle {
    background: #f1f1f1;
    font-size: 1.4rem;
    padding: 1rem;
    overflow-y: scroll;
    margin-top: 2rem;
    width: 100%;
    height: 25rem;
    transition: 0.5s ease;
    &.darkMode {
      background: #535353;
      color: white;
    }
    @media screen and (max-width: 820px) {
      width: 100%;
      font-size: 1rem;
      padding: 0;
    }
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  margin: 0 0.5rem;
  transition: 0.5s ease;
  &.toggle {
    margin-bottom: 5rem;
    width: 95%;
    height: 30rem;
    transition: 0.5s ease;
    @media screen and (max-width: 820px) {
      position: relative;
      height: 32rem;
      top: 25%;
      width: 100%;
      margin: 1rem;
    }
  }
`;

export default Note;
