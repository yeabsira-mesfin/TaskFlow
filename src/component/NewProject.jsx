import React from 'react'
import Input from './Input'
const NewProject = () => {
  return (
    <div>
        <menu>
            <li><button>Cancel</button></li>
            <li><button>Save</button></li>
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