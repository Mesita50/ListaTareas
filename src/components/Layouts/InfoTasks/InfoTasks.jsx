import React, { useContext, useEffect, useState }  from 'react'
import './InfoTasks.css'
import { tasksContext } from "../../Context/Context";
export const InfoTasks = () => {

  const context = useContext(tasksContext)
     
  useEffect( () => {
      context.tasks.forEach( element => {
        !element.status 
        ? context.setPendingTasks(context.pendingTasks+1)
        : context.setDoneTasks(context.doneTasks+1)
      })
  } , [context.tasks] )
  
  return(
    <>
    <h2 className='info-tasks'>usted tiene <span className='task-pending'>{context.pendingTasks}</span> pendientes y <span className='task-done'>{context.doneTasks}</span> terminadas</h2>
    <hr />    
    </>
  )
} 