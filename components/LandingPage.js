import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import { FaTrash } from "react-icons/fa";


const LandingPage = () => {

    const [taskList, setTaskList] = useState([])
    const [completedTask, setCompletedTask] = useState([])
    const [task, setTask] = useState('')


    function addTodo(e) {
        e.preventDefault();
        console.log(task)
        setTaskList([...taskList, task]);
        setTask('')
    }

    function taskDone(e, index) {

        if (e.target.checked) {
            let taskFinished = taskList[index]
            setCompletedTask([...completedTask, taskFinished])

            const newList = taskList.filter((_, i) => i !== index);

            setTaskList(newList)
        }

    }

    return (
        <div className='bg-[#f1f1f1] w-full h-screen text-black'>
            <Navbar />

            <div className='w-1/2 py-20 px-20 mx-auto'>

                <h1 className='text-center text-2xl font-semibold tracking-tighter leading-tight mb-5'>My To Do List</h1>

                <div className='text-center'>
                    <form>
                        <input type='text' className='border-[1px] rounded-full p-[.3vw]' onChange={(e) => setTask(e.target.value)} value={task} />
                        <input type='submit' value="Add" className='border-[1px] ml-4 text-xl p-2 rounded-2xl' onClick={(e) => addTodo(e)} />
                    </form>
                </div>


                <div className='w-1/2 mx-auto mt-5'>
                    <ul className=''>
                        {taskList.map((item, index) => {
                            return <div key={index} className='flex justify-between items-center p-2'>
                                <div>
                                    <li className='text-none' key={index}>
                                        {item}

                                    </li>
                                </div>

                                <div className='flex gap-5'>
                                    <input type='checkbox' className='px-5' onChange={(e) => taskDone(e, index)} />
                                    <span className='cursor-pointer'>
                                        <FaTrash />
                                    </span>
                                </div>
                            </div>
                        })}


                        {completedTask.map((item, index) => {
                            return <li className='line-through' key={index}>
                                {item}
                            </li>
                        })}
                    </ul>
                </div>


            </div>


        </div>
    )
}

export default LandingPage