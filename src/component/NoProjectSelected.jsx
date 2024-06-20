import React, { Children } from 'react'
import noProjectImg from '../assets/no-projects.png'
import Button from './Button'
const NoProjectSelected = ({onStartedProject}) => {
  return (
    <div className='mt-24 text-center w-2/3'>
        <img src={noProjectImg} alt="An empty task list" className='w-16 h-16 object-contain mx-auto'/>
        <h2 className='text-xl font-bold text-white my-4'>No Project Selected</h2>  
        <p className='mb-4 text-white'>Select a project or get started with a new one</p> 
        <p>
           <Button onClick={onStartedProject}>Create new project</Button>
        </p>
    </div>
  )
}

export default NoProjectSelected