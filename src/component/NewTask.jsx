import React,{useState} from 'react'

const NewTask = ({onAddTask}) => {
    const [enteredTask, setEnteredTask] = useState();
    function handleChange(event){
        setEnteredTask(event.target.value)
    }
    function handleClick(){
       onAddTask(enteredTask)
       setEnteredTask('');
    }
  return (
    <div className='flex items-center text-white gap-4'>
        <input type="text" className='w-64 px-2 py-1 rounded-sm text-gray-800' value={enteredTask}  onChange={handleChange}/>
        <button className='' onChange={handleChange} onClick={handleClick}>Add Task</button>
    </div>
  )
}

export default NewTask