import React, { useState } from 'react'

const TaksManager = () => {
    const [tasks, setTasks] = useState([])
  
  // Estado para almacenar la nueva tarea ingresada
  const [newTask, setNewTask] = useState('')

  // Función para manejar el cambio en el input de nueva tarea
  const handleTaskInputChange = (event) => {
    setNewTask(event.target.value);
  }

  // Función para manejar la adición de una nueva tarea
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={handleTaskInputChange}
        />
        <button onClick={addTask}>Agregar tarea</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaksManager