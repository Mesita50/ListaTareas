import React from 'react';
import './filter.css'

const Filter = () => {
  return (
    <div className="filter">
      <label htmlFor="taskFilter"><strong>Filtrar:</strong></label>
      <select id="taskFilter">
        <option value="all">Todas las tareas</option>
        <option value="pending">Pendientes</option>
        <option value="completed">Finalizadas</option>
      </select>
    </div>
  );
};

export default Filter;