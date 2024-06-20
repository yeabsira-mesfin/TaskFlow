import React from 'react'

const NewTask = () => {
  return (
    <div className='flex items-center text-white gap-4'>
        <input type="text" className='w-64 px-2 py-1 rounded-sm'/>
        <button className=''>Add Task</button>
    </div>
  )
}

export default NewTask