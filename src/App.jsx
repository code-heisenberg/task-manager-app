import { useState, useEffect } from 'react'
import './App.css'
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import useLocalstorage from './useLocalStorage';

function App() {

  const [ filter, setFilter ] = useState('all');
  const [tasks, setTasks] = useLocalstorage('tasks', []);
  const [searchTerm, setSearchTerm] = useState('');


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

  const filteredTasks = () => {
    // if (filter === 'completed') {
    //   return tasks.filter(task => task.completed);
    // } else if (filter === 'pending') {
    //   return tasks.filter(task => !task.completed);
    // }
    // else if (filter === 'all') {
    //   return tasks;
    // }
    let filtered = tasks;
    if (filter === 'completed') {
      filtered = filtered.filter(task => task.completed);
    } else if (filter === 'pending') {
      filtered = filtered.filter(task => !task.completed);
    }
    if (searchTerm) {
      filtered = filtered.filter(task => 
        task.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }

  const filterdTasks = filteredTasks();

  return (
    <div className='container'>
      <h1>Task Manager</h1>
      <TaskForm onAdd={handleAddTask}/>
      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className={filter === "pending" ? "active" : ""}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <TaskList
        onDelete={handleDeleteTask}
        onToggle={handleToggleTask}
        tasks={filterdTasks}
      />
    </div>
  )
}

export default App
