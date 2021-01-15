import React from "react";
import { useDispatch } from "react-redux";
import Button from "../Button";
import { date } from "../GetDate";
import styled from "styled-components";

const TaskForm = ({
  inputTitle,
  setInputTitle,
  inputDesc,
  setInputDesc,
  note,
  setNote,
}) => {
  const dispatch = useDispatch();

  const inputTitleHandler = (e) => {
    setInputTitle(e.target.value);
  };

  const inputDescHandler = (e) => {
    setInputDesc(e.target.value);
  };

  const submitNoteHandler = () => {
    setNote([
      ...note,
      {
        title: inputTitle,
        description: inputDesc,
        notesItems: [],
        date: date,
        id: Math.random() * 1000,
      },
    ]);
    setInputTitle("");
    setInputDesc("");
  };

  return (
    <>
      <label htmlFor="Notebook">Nazwa Notatnika</label>
      <TitleInput
        value={inputTitle}
        onChange={inputTitleHandler}
        id="Notebook"
        type="text"
      />
      <label htmlFor="Description">Opis</label>
      <DescriptionInput
        value={inputDesc}
        onChange={inputDescHandler}
        id="Description"
        type="text"
      />
      <Button
        click={() => {
          submitNoteHandler();
          dispatch({ type: "NOTEBOOKSLISTS" });
        }}
        value={"Dodaj"}
      />
    </>
  );
};

const TitleInput = styled.input`
  border: none;
  width: 95%;
  height: 2rem;
  margin: auto;
  font-size: 1.6rem;
  border-bottom: 3px solid #01c915;
  padding: 1rem 0;
  @media screen and (max-width: 820px) {
    font-size: 1.2rem;
  }
`;

const DescriptionInput = styled.textarea`
  border: none;
  width: 95%;
  height: 8rem;
  margin: auto;
  font-size: 2rem;
  border-bottom: 3px solid #01c915;
  resize: none;
  @media screen and (max-width: 820px) {
    font-size: 1.2rem;
  }
`;

export default TaskForm;
