
import './App.css'
import { useState } from 'react';

// component imports
import Header from './components/Header.jsx'
import TaskField from './components/TaskField.jsx'
import TaskList from './components/TaskList.jsx'

function App() {
  const [tasksArray, setTasksArray] = useState([]);

  const addTaskToArray = (task) => {
    //long way
    // const tempArray = [...tasksArray]
    // tempArray.push(task);
    // setTasksArray(tempArray);

    //More concise method
    // setTasksArray([...tasksArray, task]);

    //The more correct method
    setTasksArray((prevTaskArray) => [...prevTaskArray, task]);
  }

  console.log(tasksArray);

  const deleteTaskFromArray = (taskToDelete) => {
    setTasksArray(tasksArray.filter(task => task !== taskToDelete))
  }


  return (
    <div className='app-container'>
      <Header userName="ARJAN"/>
      <TaskField addTaskToArray={addTaskToArray} />
      <TaskList tasksArray={tasksArray} deleteTaskFromArray={deleteTaskFromArray} />
    </div>
  )
}

export default App
