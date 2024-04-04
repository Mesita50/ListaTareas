import React, { useContext, useState } from 'react';
import { tasksContext } from "../Context/Context";
import { v4 as uuidv4 } from 'uuid';
import './NewTask.css';

export const NewTask = () => {
  const context = useContext(tasksContext);
  const [titleTask, setTitleTask] = useState('');
  const [descriptionTask, setDescriptionTask] = useState('');
  
  const handleTitleTask = (event) => setTitleTask(event.target.value); 
  const handleDescriptionTask = (event) => setDescriptionTask(event.target.value);
  
  const handleCreateTask = (event) => {    
    event.preventDefault();
     
    const newTask = {
      id: uuidv4(),
      title: titleTask,
      description: descriptionTask,
      status: false
    };
          
    context.setTasks([...context.tasks, newTask]);
    context.setPendingTasks(context.pendingTasks + 1);
  };

  return (
    <form className='frm-task' action="">
      <fieldset name='txt-title' className='group-title-task'>
        <input onChange={handleTitleTask} id='txt-title' placeholder='Ej: Aseo ambiente' type="text" />
      </fieldset>
      <fieldset name='txt-description' className='group-description-task'>
        <input onChange={handleDescriptionTask} id='txt-description' placeholder='Ej: Realizar aseo del ambiente' type="text" maxLength={100} />
      </fieldset>
      <button onClick={handleCreateTask} className='btn-new-task'>Crear nueva Tarea</button>
    </form>
  );
};
