import React from "react";
import styled from "styled-components";
import Notebook from "./Notebook";

const NotebookList = ({ note, setNote }) => {
  return (
    <NotebookListWrapper>
      {note.length === 0 && (
        <Info>
          Nie masz jeszcze żadnych <span>notatników</span>
        </Info>
      )}
      <NotebookWrapper>
        {note.map((notes) => (
          <Notebook
            title={notes.title}
            description={notes.description}
            date={notes.date}
            key={notes.id}
            note={note}
            notes={notes}
            setNote={setNote}
          />
        ))}
      </NotebookWrapper>
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  font-weight: bold;
  span {
    color: #01c915;
  }
  @media screen and (max-width: 820px) {
    font-size: 2.4rem;
  }
`;

const NotebookWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export default NotebookList;
