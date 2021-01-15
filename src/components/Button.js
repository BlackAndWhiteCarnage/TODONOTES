import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Button = ({ value, click }) => {
  const toggleDarkMode = useSelector((state) => state.toggleDarkMode);

  return (
    <ButtonWrapper onClick={click} className={toggleDarkMode && "darkMode"}>
      {value}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  width: 10rem;
  height: 3.5rem;
  font-size: 2.4rem;
  font-weight: bold;
  border: none;
  margin: 1.5rem;
  color: white;
  background: #01c915;
  transition: 0.5s ease;
  border-radius: 20px 0 20px 0;
  &:hover {
    cursor: pointer;
    background: #fff;
    color: #01c915;
    transition: 0.5s ease;
    &.darkMode {
      background: #353535;
      color: white;
    }
  }
  &.darkMode {
    color: black;
  }
  @media (max-width: 820px) {
    width: 8rem;
    font-size: 1.6rem;
  }
`;

export default Button;
