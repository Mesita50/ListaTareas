import React, { useContext } from 'react';
import { tasksContext } from '../Context/Context';
import './ItemTask.css';

export const ItemTask = ({ titleTask, content, idTask }) => {
  // Accedemos al contexto
  const { tasks, updateTaskStatus } = useContext(tasksContext);

  // Buscamos la tarea actual
  const task = tasks.find(task => task.id === idTask)

  // Función para manejar el cambio en el checkbox
  const handleCheckboxChange = () => {
    // Actualizamos el estado de la tarea
    updateTaskStatus(idTask, !task.status);
  }

  return (
    <li id={idTask} className={task.status ? 'item-task checked' : 'item-task'}>
      <div className={task.status ? 'circle-state circle-green' : 'circle-state'}></div>
      <h2>{titleTask}</h2>
      <p>{content}</p>
      <input type="checkbox" checked={task.status} onChange={handleCheckboxChange} />
    </li>
  )
}