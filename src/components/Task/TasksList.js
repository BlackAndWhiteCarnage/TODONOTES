import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { useSelector } from "react-redux";

const TasksList = ({ tasks, setTasks }) => {
  const toggleDarkMode = useSelector((state) => state.toggleDarkMode);

  return (
    <>
      {tasks.length === 0 && (
        <Info className={toggleDarkMode && "darkMode"}>
          Nie masz jeszcze żadnych zadań
        </Info>
      )}
      {tasks.map((task) => (
        <Task
          text={task.text}
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </>
  );
};

const Info = styled.div`
  width: 100%;
  height: 100%;
  font-size: 2.4rem;
  color: rgba(0, 0, 0, 0.4);
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  &.darkMode {
    color: rgba(255, 255, 255, 0.4);
  }
`;

export default TasksList;
