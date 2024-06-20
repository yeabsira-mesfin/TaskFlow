import React from 'react'
import NewTask from './NewTask'
const Tasks = () => {
  return (
    <section>
        <h2 className='text-2xl font-bold text-white mb-4'>Tasks</h2>
        <NewTask/>
        <p className='text-white my-4'>This project doesn't have any tasks yet.</p>
        <ul>

        </ul>
    </section>
  )
}

export default Tasks