import React from "react";
import styled from "styled-components";

const Button = ({ value, click }) => {
  return <ButtonWrapper onClick={click}>{value}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  width: 10rem;
  height: 3.5rem;
  font-size: clamp(1.6rem, 2.5vw, 2rem);
  font-weight: bold;
  border: none;
  margin: 1.5rem;
  color: #fff;
  background: #01c915;
  transition: 0.5s ease;
  &:hover {
    cursor: pointer;
    background: #fff;
    color: #01c915;
    transition: 0.5s ease;
  }
  @media (max-width: 820px) {
    width: 8rem;
    font-size: 1.6rem;
  }
`;

export default Button;
