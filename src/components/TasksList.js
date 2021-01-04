import React from "react";
import styled from "styled-components";
import Task from "./Task";

const TasksList = ({ tasks, setTasks }) => {
  return (
    <>
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

export default TasksList;
