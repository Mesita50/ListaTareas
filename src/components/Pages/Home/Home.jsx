import { useState } from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'
import { v4 as uuidv4} from 'uuid'
import { ContainerTasks } from '../../Layouts/ContainerTasks/ContainerTasks'
import { ItemTask } from '../../ItemTask/ItemTask'


const tsk = [
  { id: uuidv4(), title: 'Tarea de ejemplo 1', description: 'Descripción pendiente1',status: false},
  { id: uuidv4(), title: 'Tarea de ejemplo 2', description: 'Descripción pendiente2',status: true},
  { id: uuidv4(), title: 'Tarea de ejemplo 3', description: 'Descripción pendiente3',status: false},
  { id: uuidv4(), title: 'Tarea de ejemplo 4', description: 'Descripción pendiente4',status: true}
]

export const Home = () => {

  const [ tasks, setTasks] = useState(tsk)
 
  return (
    <>      
      <Header>
        <h1>Gestor de tareas</h1>
      </Header>      
      <Main>
        <ContainerTasks>
          {
            tasks.map(task => <ItemTask key={task.id} idTask={task.id} content={task.description} titleTask={task.title}></ItemTask>)
          }
        </ContainerTasks>
      </Main>        
    </>
  )
}