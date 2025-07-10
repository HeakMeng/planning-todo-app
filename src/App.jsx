import React, { useState } from "react";
import './App.css';
import TaskLists from "./components/Tasks/tasklists.component";
import NewTask from "./components/Tasks/newtask.component";

function App(){
  const [newTask,setNewTask] = useState({});

  const handleChange = ({name, value}) =>{
    setNewTask((prev) => ({...prev, id: Date.now(), [name]: value}));
  }

  const [allTasks,setAllTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!newTask.title) return;
    setAllTasks((prev) => [newTask,...prev]);
    setNewTask({});
  };

  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
  };
  
  return(
    <div className="app-container">
      <div className="app-header">
        <h1 className="app-title">Task Manager</h1>
        <p className="app-subtitle">Stay organized, stay focused</p>
      </div>
      <NewTask newTask={newTask} handleChange={handleChange} handleSubmit={handleSubmit} />
      <TaskLists allTasks={allTasks} handleDelete={handleDelete} />
    </div>
  )
}

export default App;