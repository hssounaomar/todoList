import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const Tasks = () => {

  const tasks = useSelector((state) => state.task.tasks);

  return (
    <div>
      {tasks.map((el) => <Task task={el} key={el.id} />)}
    </div>
  );
};

export default Tasks;
