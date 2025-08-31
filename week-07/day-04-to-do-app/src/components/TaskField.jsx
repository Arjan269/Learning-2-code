import { useState } from 'react';

export default function TaskField({ addTaskToArray }) {
    const [task, setTask] = useState('');

    function handleUserInput(e) {
        // console.log(e.target.value);
       setTask(e.target.value);
    }

    function handleSubmitTask(e) {
        e.preventDefault();
        console.log(task);
        
        if (task.length > 0) {
            addTaskToArray(task);
            setTask("");
        } else {
            alert("Please input a task")
        }

        // task.length > 0 ? addTaskToArray(task) : alert("Please input a task")
    }

  return (
    <div>
        <form className="form-container" onSubmit={handleSubmitTask} >
            <label>Task</label>
            <input type="text" onChange={handleUserInput} value={task}/>
            <button className="submit-btn">Save Task</button>
        </form>
    </div>
  )
}
