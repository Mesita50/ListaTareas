import {createContext, useState} from 'react'
import { v4 as uuidv4} from 'uuid'

export const taskContext = createContext()

const tsk = [
  { id: uuidv4(), title: 'Tarea de ejemplo 1', description: 'Descripción pendiente1',status: false},
  { id: uuidv4(), title: 'Tarea de ejemplo 2', description: 'Descripción pendiente2',status: false},
  { id: uuidv4(), title: 'Tarea de ejemplo 3', description: 'Descripción pendiente3',status: false},
  { id: uuidv4(), title: 'Tarea de ejemplo 4', description: 'Descripción pendiente4',status: false}
]

export const TasksProvider = ({ children }) => {

  const [ tasks, setTasks ] = useState(tsk)
  const [filteredTasks, setfilteredTasks] = useState(tsk)

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(prevTasks => 
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    )
  }

  return(
    <taskContext.Provider value={{
      tasks, 
      setTasks, 
      filteredTasks, 
      setfilteredTasks 
      }}>
    </taskContext.Provider>
  )
}