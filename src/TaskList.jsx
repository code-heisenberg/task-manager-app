import React from 'react';

function TaskList({ tasks, onToggle, onDelete }) {
    return (
        <ul className='task-list'>
            {tasks.length === 0 ?
                <li>No tasks available</li>
                : tasks.map((task) => (
                <li key={task.id} className={task.completed ? 'completed' : ''}>
                    <span onClick={() => onToggle(task.id)}>{task.name}</span>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                    </li>
            ))}
        </ul>
    )
}

export default TaskList;

