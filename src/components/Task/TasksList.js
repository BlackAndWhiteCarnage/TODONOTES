import React from "react";
import styled from "styled-components";
import Task from "./Task";

const TasksList = ({ tasks, setTasks }) => {
  return (
    <>
      {tasks.length === 0 && <Info>Nie masz jeszcze żadnych zadań</Info>}
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
  color: rgba(0, 0, 0, 0.3);
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default TasksList;
