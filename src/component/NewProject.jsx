import React from 'react'
import Input from './Input'
const NewProject = ({cancelProject}) => {
  return (
    <div className='w-[35rem] mt-16 text-gray-50'>
        <menu className=' flex items-center justify-end gap-4 my-4'>
            <li><button className='hover:text-gray-100' onClick={cancelProject}>Cancel</button></li>
            <li><button className='px-6 py-2 rounded-md bg-blue-300 hover:bg-gray-500 hover:text-gray-100'>Save</button></li>
        </menu>
        <div>
            <Input label = "Title"/>
            <Input label = "Description" textArea/>
            <Input label = "Due"/>
        </div>
    </div>
  )
}

export default NewProject