import React from 'react';
import './ItemTask.css'

const ItemTask = ({ task }) => {
    const circleStyle = {
        margin: '0.7rem 1rem 0 4rem',
        width: '2.2rem',
        height: '2.2rem',
        borderRadius: '50%',
        marginRight: '10px',
        backgroundColor: task.checkpoint ? '#07F142' : '#F14D07',
      };
  return (
    <li className="task-item">
        <div style={circleStyle}></div>
      <h3 id='taskTitle'>{task.title}</h3>
      <p id='descriptionTask'>{task.description}</p>
      <input id='check'type="checkbox" checked={task.checkpoint}  />
    </li>
  );
};

export default ItemTask;