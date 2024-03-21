import React, { useContext } from 'react'
import { Header } from '../../Layouts/Header/Header'
import profile from '../../../images/profile.jpeg'
import { Main } from '../../Layouts/Main/Main'
import { InfoTasks } from '../../Layouts/InfoTasks/InfoTasks'
import { NewTask } from '../../NewTask/NewTask'
import { FilterTasks } from '../../FilterTasks/FilterTasks'
import { ContainerTasks } from '../../Layouts/ContainerTasks/ContainerTasks.jsx'
import { ItemTask } from '../../ItemTask/ItemTask'
import { tasksContext } from '../../Context/Context'

export const Home = () => {

  const otherContext = useContext(tasksContext)
  
 
  return (
    <>      
      <Header>
        <div className="container-header-1">
          <div className="container-title">
            <h1 className='title-header'>Gestor de Tareas</h1>
          </div>
          <div className="container-img">
            <img className='img-profile' src={profile} alt="Imagen de perfil" />        
          </div>
        </div>
      <NewTask />
      <InfoTasks />
      </Header>      
      <Main>
        <FilterTasks />
        <ContainerTasks>
          {
            otherContext.tasks.map( (task,idx) => <ItemTask key={task+idx} titleTask={task.title} content={task.description} /> )
          }
        </ContainerTasks>
      </Main>        
    </>
  )
}