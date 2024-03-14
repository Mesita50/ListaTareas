import React from 'react'
import './tasks.css'
import ItemTask from '../itemTask/ItemTask';

const Tasks = ({ tasks }) => {
  return (
    <ul className="tasks-list">
      {tasks.map((task) => (
        <ItemTask key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default Tasks;