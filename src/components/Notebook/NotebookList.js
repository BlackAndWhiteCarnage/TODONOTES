import React, { useState } from "react";
import styled from "styled-components";
// import Note from "./Not";
import Note from "./Note";

const NotebookList = ({ note, setNote }) => {
  return (
    <NotebookListWrapper>
      {note.length === 0 && <Info>Nie masz jeszcze żadnych notatników</Info>}
      <Wrapper>
        {note.map((notes) => (
          <>
            <Note
              title={notes.title}
              description={notes.description}
              key={notes.id}
              note={note}
              notes={notes}
              setNote={setNote}
            />
          </>
        ))}
      </Wrapper>
    </NotebookListWrapper>
  );
};

const Info = styled.div`
  width: 100%;
  height: 100%;
  font-size: 2.4rem;
  color: rgba(0, 0, 0, 0.3);
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotebookListWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 6rem 0 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default NotebookList;
