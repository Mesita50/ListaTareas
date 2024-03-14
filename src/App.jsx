import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Header } from './components/Layouts/Header/Header';
import { Main } from './components/Layouts/Main/Main';
import Filter from './components/Filter/Filter';
import Tasks from './components/Tasks/Tasks';
import { Footer } from './components/Layouts/Footer/Footer';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Hacer Ejercicio:',
      description: 'Realizar rutina asignada en el gym.',
      checkpoint: false,
    },
    {
      id: 2,
      title: 'Leer Libro:',
      description: 'Pagina 70 100 años de soledad.',
      checkpoint: true,
    },
    {
      id: 3,
      title: 'Realizar el aseo:',
      description: 'Realizar la lista de quehaceres pendiente.',
      checkpoint: false,
    },
    {
      id: 4,
      title: 'Tomar café:',
      description: 'Asistir al café a las 4:00 pm.',
      checkpoint: true,
    },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleCreateTask = () => {
    if (newTaskTitle.trim() !== '' && newTaskDescription.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        title: newTaskTitle,
        description: newTaskDescription,
        checkpoint: false,
      };

      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
      setNewTaskDescription('');
    }
  };

  return (
    <>
      <Header>
        <h1 className='Title'>Lista de Tareas</h1>
        <img className='logo' src={reactLogo} alt='React Logo' />
      </Header>
      <Main>
        <div className='createContainer'>
          <h3>Titulo de la tarea:</h3>
          <input
            type='text'
            className='inputTask'
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <h3>Descripcion de la tarea:</h3>
          <input
            type='text'
            className='inputTask'
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
          <button className='createTask' onClick={handleCreateTask}>
            Crear
          </button>
        </div>
        <h2>
          Usted tiene {tasks.filter((task) => task.checkpoint).length} tareas
          completadas y {tasks.filter((task) => !task.checkpoint).length} tareas
          pendientes.
        </h2>
        <hr />
        <Filter />
        <div className='TasksContainer'>
          <Tasks tasks={tasks} />
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default App;
