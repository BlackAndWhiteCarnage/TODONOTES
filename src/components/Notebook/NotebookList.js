import React from "react";
import styled from "styled-components";
import Notebook from "./Notebook";

const NotebookList = ({ note, setNote }) => {
  return (
    <NotebooksListWrapper>
      <Notebooks>
        <Header>
          {note.length === 0
            ? "Nie masz jeszcze żadnych notatników"
            : "Twoje notatniki"}
        </Header>
        {note.map((item) => (
          <Notebook
            title={item.title}
            key={item.id}
            description={item.description}
            note={note}
            item={item}
            setNote={setNote}
          />
        ))}
      </Notebooks>
    </NotebooksListWrapper>
  );
};

const NotebooksListWrapper = styled.div`
  width: 15rem;
  height: 100vh;
  display: flex;
`;

const Notebooks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f6f6f6;
  box-shadow: 5px 0px 20px 10px rgba(0, 0, 0, 0.2);
`;

const Header = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;
  margin: 2rem 0;
`;

export default NotebookList;
