import React, { useContext, useEffect, useState }  from 'react'
import './InfoTasks.css'
import { tasksContext } from "../../Context/Context";

export const InfoTasks = () => {

  const context = useContext(tasksContext)
  
  useEffect(() => {
    let pending = context.tasks.filter( task => task.status === false )
    let resolve = context.tasks.filter( task => task.status === true )
    context.setPendingTasks(pending.length)
    context.setDoneTasks(resolve.length)
  },[context.tasks])  
   
  return(
    <>
    <h2 className='info-tasks'>usted tiene <span className='task-pending'>{context.pendingTasks}</span> pendientes y <span className='task-done'>{context.doneTasks}</span> terminadas</h2>
    <hr />    
    </>
  )
} 