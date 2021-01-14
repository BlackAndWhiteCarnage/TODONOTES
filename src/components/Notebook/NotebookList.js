import React, { useState } from "react";
import styled from "styled-components";
import Note from "./Note";

const NotebookList = ({ note, setNote }) => {
  return (
    <NotebookListWrapper>
      {note.length === 0 && (
        <Info>
          Nie masz jeszcze żadnych <span>notatników</span>
        </Info>
      )}
      <Wrapper>
        {note.map((notes) => (
          <Note
            title={notes.title}
            description={notes.description}
            key={notes.id}
            note={note}
            notes={notes}
            setNote={setNote}
          />
        ))}
      </Wrapper>
    </NotebookListWrapper>
  );
};

const NotebookListWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Info = styled.p`
  font-size: 6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  span {
    color: #01c915;
  }
  @media screen and (max-width: 820px) {
    font-size: 2.4rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  @media screen and (max-width: 820px) {
    overflow-x: hidden;
  }
`;

export default NotebookList;
