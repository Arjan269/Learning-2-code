

export default function TaskList({ tasksArray, deleteTaskFromArray }) {
  return (
    <div>
        {tasksArray.map((task, index) => (
            <h3 className="task" key={index}>
                {index + 1}. {task}
                <button className='delete-icon' onClick={() => deleteTaskFromArray(task)} >X</button>
            </h3>
        ))}
    </div>
  )
}
