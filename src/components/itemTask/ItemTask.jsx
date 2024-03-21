import React, { useState,useContext } from 'react'
import { tasksContext } from '../Context/Context'

import './ItemTask.css'

export const ItemTask = ({titleTask,content}) => {

  const context = useContext(tasksContext)
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    if (isChecked) {
      context.setDoneTasks(context.doneTasks + 1)
      // context.setPendingTasks(context.pendingTasks - 1)
    } else {
      context.setPendingTasks(context.pendingTasks + 1)
      // context.setDoneTasks(context.doneTasks - 1)
    }    
    setIsChecked(!isChecked)
  } 

  return (
    <li className={ isChecked ? 'item-task checked': 'item-task' }>
      <div className={ isChecked ? 'circle-state circle-green': 'circle-state' }></div>
      <h2>{titleTask}</h2>
      <p>{content}</p>
      <input 
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </li>
  )
}

export default ItemTask