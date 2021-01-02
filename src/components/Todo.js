import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Todo = () => {
  const toggle = useSelector((state) => state.toggle);
  return (
    <TodoWrapper className={toggle ? "toggle" : "toggleOut"}>
      <label htmlFor="Todo">Zadanie</label>
      <input id="Todo" type="text" />
      <button>Dodaj</button>
    </TodoWrapper>
  );
};

const TodoWrapper = styled.div`
  background-color: #f6f6f6;
`;

export default Todo;
