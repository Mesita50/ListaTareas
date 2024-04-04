import React, { useContext } from 'react';
import './FilterTasks.css';
import { tasksContext } from '../Context/Context';

export const FilterTasks = () => {
  const context = useContext(tasksContext);

  const handleFilters = (event) => {
    let currentOption = event.target.value;    

    if (currentOption === 'Pendientes') {
      context.setFilteredTasks(context.tasks.filter(task => !task.status))
    } else if (currentOption === 'Realizadas') {
      context.setFilteredTasks(context.tasks.filter(task => task.status))
    } else {
      // Si la opción es "Todas", simplemente mostramos todas las tareas
      context.setFilteredTasks(context.tasks)
    }

    // Actualizamos el estado de las tareas con el resultado del filtro
    context.setTasks(filteredTasks);
  };

  return (
    <div className='container-filters'>
      <label>Filtrar por</label>
      <select onChange={handleFilters}>
        <option value="Todas" className="opt opt1">Todas</option>
        <option value="Pendientes" className="opt opt2">Pendientes</option>
        <option value="Realizadas" className="opt opt3">Realizadas</option>
      </select>
    </div>
  )
}