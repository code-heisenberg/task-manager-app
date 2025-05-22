import { useState } from 'react'
import './App.css'
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {

  const [tasks, setTasks] = useState([]);


  const handleAddTask = (task) => {
    // add the task to the tasks array
    setTasks([...tasks, { id: Date.now(), name: task, completed: false }]);
    console.log('Task added:', task);
  }

  const handleDeleteTask = (id) => {
    // remove the task from the tasks array
    setTasks(tasks.filter(task => task.id !== id));
  }

  const handleToggleTask = (id) => {
    // toggle the task's completed state
    console.log('Task toggled:', id);
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  }
    

  return (
    <div className='container'>
      <h1>Task Manager</h1>
      <TaskForm onAdd={handleAddTask}/>
      <TaskList
        onDelete={handleDeleteTask}
        onToggle={handleToggleTask}
        tasks={tasks}
      />
    </div>
  )
}

export default App
