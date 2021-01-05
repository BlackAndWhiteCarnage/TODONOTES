import React from "react";
import styled from "styled-components";
import xMarkTransparent from "../../images/X-Mark-Transparent.svg";

const Notebook = ({ title, description, note, setNote, item }) => {
  const deleteHandler = () => {
    setNote(note.filter((el) => el.id !== item.id));
  };

  return (
    <NotebookWrapper>
      <Icon src={xMarkTransparent} onClick={deleteHandler} />
      <NotebookTitle>{title}</NotebookTitle>
      <NotebookDescription>{description}</NotebookDescription>
    </NotebookWrapper>
  );
};

const NotebookWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0.5rem auto;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: #01c915;
    color: white;
    transition: 0.3s ease;
  }
`;
const NotebookTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.6rem;
`;
const NotebookDescription = styled.p`
  font-size: 1.2rem;
`;
const Icon = styled.img`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  transition: 0.5s ease;
  border-radius: 50%;
  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease;
  }
`;

export default Notebook;
