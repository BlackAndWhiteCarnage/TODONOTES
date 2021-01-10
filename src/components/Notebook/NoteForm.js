import React, { useState } from "react";
import styled from "styled-components";
import xMark from "../../images/X-Mark.svg";

const NoteForm = ({
  copy,
  setCopy,
  note,
  setNote,
  notes,
  setInputTitle,
  setInputDesc,
}) => {
  const deleteHandler = () => {
    // setCopy(copy.filter((el) => el.parentId !== notes.id));
    copy.pop();
  };

  return (
    <NoteWrapper>
      {copy.map((item) => (
        <Wrap key={item.uuid}>
          <FormWrapper>
            <TitleInput
              value={item.noteTitle}
              type="text"
              onChange={(e) => {
                item.noteTitle = e.target.value;
                setInputTitle(e.target.value);
              }}
            />
            <DescInput
              value={item.noteDesc}
              onChange={(e) => {
                item.noteDesc = e.target.value;
                setInputDesc(e.target.value);
              }}
              type="text"
            />
          </FormWrapper>
          <Options>
            <Icon
              src={xMark}
              onClick={() => {
                // deleteHandler
                copy.pop(item.uuid);
                setCopy(
                  copy.map((x) => {
                    return {
                      ...x,
                    };
                  })
                );
              }}
            />
          </Options>
        </Wrap>
      ))}
    </NoteWrapper>
  );
};

const Options = styled.div`
  width: 10%;
  height: 54.5rem;
  background: #ffffff;
`;
const NoteWrapper = styled.div`
  width: 100%;
  margin-top: 2.5rem;
`;
const FormWrapper = styled.div`
  width: 100%;
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
const TitleInput = styled.input`
  width: 95%;
  height: 2rem;
  border: none;
  border-bottom: 2px solid grey;
  margin-bottom: 0.5rem;
  font-size: 2.4rem;
  font-weight: bold;
`;

const DescInput = styled.textarea`
  width: 95%;
  height: 50rem;
  overflow-y: scroll;
  margin-top: 2rem;
  border: 2px solid grey;
  font-size: 2.4rem;
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5rem;
  align-items: center;
`;

export default NoteForm;
