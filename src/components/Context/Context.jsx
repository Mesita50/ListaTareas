import { createContext, useState } from "react";

export const tasksContext = createContext();

export const TasksProvider = ({ children }) => {
  
  const [tasks, setTasks] = useState([])
  const [pendingTasks, setPendingTasks] = useState(0)
  const [doneTasks, setDoneTasks] = useState(0)
  
  return (
    <tasksContext.Provider value={{ tasks, setTasks, pendingTasks, setPendingTasks, doneTasks, setDoneTasks }}>
      {children}
    </tasksContext.Provider>
  );
};