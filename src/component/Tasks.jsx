import React from 'react'
import NewTask from './NewTask'
const Tasks = ({tasks,onAddTask,onDeleteTask}) => {
  return (
    <section>
        <h2 className='text-2xl font-bold text-white mb-4'>Tasks</h2>
        <NewTask onAddTask={onAddTask}/>
        {tasks.length === 0 && (<p className='text-white my-4'>This project doesn't have any tasks yet.</p>)}
        {tasks.length > 0 && (<ul className='p-4 mt-8 rounded-md text-white'>
            {tasks.map((task)=> <li className='flex justify-between my-4 text-white' key={task.id}>
                <span>{task.text}</span>
                <button className='text-white hover:text-red-700'>Clear</button>
            </li>)}
</ul>)} 
    </section>
  )
}

export default Tasks