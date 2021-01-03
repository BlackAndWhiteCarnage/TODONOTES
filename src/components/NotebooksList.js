import React from "react";
import styled from "styled-components";

const NotebooksList = () => {
  return (
    <NotebooksListWrapper>
      <Notebooks>
        <Header>Twoje notatki</Header>
      </Notebooks>
      <Note>
        <Label htmlFor="Note">Nazwa notatki</Label>
        <Input id="Note" type="text" />
        <Label htmlFor="Content">Tresć notatki</Label>
        <TextArea id="Content" />
      </Note>
    </NotebooksListWrapper>
  );
};

const NotebooksListWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #ededed;
  display: flex;
`;

const Notebooks = styled.div`
  width: 20%;
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
  margin-top: 2rem;
`;

const Note = styled.div`
  width: 100%;
  height: 70%;
  align-self: flex-end;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 90%;
  height: 3rem;
  border: none;
  margin-top: 1rem;
  border-bottom: 3px solid #01c915;
  font-size: 1.6rem;
`;

const TextArea = styled.textarea`
  width: 90%;
  height: 100%;
  border: none;
  margin-top: 1rem;
  background: #e8e8e8;
  font-size: 2rem;
  resize: none;
`;

const Label = styled.label`
  align-self: flex-start;
  margin: 2rem 0 0 4.5rem;
  font-size: 1.6rem;
`;

export default NotebooksList;
