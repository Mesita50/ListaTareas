import React, { useContext, useState, useEffect } from 'react'
import { tasksContext } from "../Context/Context";
import './NewTask.css'

export const NewTask = () => {

  const context = useContext(tasksContext)
  
  const [titleTask, setTitleTask] = useState('')
  const [descriptionTask, setDescriptionTask] = useState('')
  
  const handleTitleTask = (event) => setTitleTask(event.target.value) 
  const handleDescriptionTask = (event) => setDescriptionTask(event.target.value) 

  useEffect(() => {
    console.log('Soy el array Tasks' + context.tasks)
  }, [context.tasks])
  
  const handleCreateTask = (event) => {    
    event.preventDefault()
     
    const newTask = {
      title: titleTask,
      description: descriptionTask,
      status: false
    }          
    context.setTasks([...context.tasks,newTask])
  }  

  return (
    <form className='frm-task' action="">
      <fieldset name='txt-title' className='group-title-task'>
        {/* <label htmlFor="">Título de la tarea</label> */}
        <input onChange={handleTitleTask} id='txt-title' placeholder='Titulo' type="text" />
      </fieldset>
      <fieldset name='txt-description' className='group-description-task'>
        {/* <label htmlFor="">Descripción de la tarea</label> */}
        <input onChange={handleDescriptionTask} id='txt-description' placeholder='Descripcion' type="text" maxLength={100} />
      </fieldset>
      <button onClick={handleCreateTask} className='btn-new-task'>Crear</button>
    </form>
  )
}