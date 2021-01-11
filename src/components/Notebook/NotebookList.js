import React, { useState } from "react";
import styled from "styled-components";
import Note from "./Note";

const NotebookList = ({ note, setNote }) => {
  return (
    <NotebookListWrapper>
      {note.length === 0 && <p>Nie masz jeszcze żadnych notatników</p>}
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
  height: 100%;
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
`;

export default NotebookList;
