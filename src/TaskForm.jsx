import React, { useState} from 'react';

function TaskForm({onAdd}) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(task); 
        // clear the input field
        setTask('');
    };

    return (
        <form className='task-form'>
            <input
                onChange={(e) => setTask(e.target.value)} 
                type="text"
                placeholder="Task Name"
                value={task}
            />
            <button 
                onClick={handleSubmit} 
                type="submit"
            >Add Task</button>
        </form>
    )
}

export default TaskForm;