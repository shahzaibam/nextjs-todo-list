import React, { useState } from 'react'
import Navbar from '@/components/Navbar'

const LandingPage = () => {

    const [taskList, setTaskList] = useState([])
    const [task, setTask] = useState('')


    function addTodo(e) {
        e.preventDefault();
        console.log(task)
        setTaskList([...taskList, task]);
        setTask('')
    }

    return (
        <div className='bg-[#f1f1f1] w-full h-screen text-black'>
            <Navbar />

            <div className='bg-green-500 w-1/2 py-20 px-20 mx-auto'>

                <h1 className='text-center text-2xl font-semibold tracking-tighter leading-tight mb-5'>My To Do List</h1>

                <div className='text-center'>
                    <form>
                        <input type='text' className='border-[1px] rounded-full p-[.3vw]' onChange={(e) => setTask(e.target.value)} value={task} />
                        <input type='submit' value="Add" className='border-[1px] ml-4 text-xl p-2 rounded-2xl' onClick={(e) => addTodo(e)} />
                    </form>
                </div>


                <div className='bg-red-500 w-1/2 mx-auto mt-5'>
                    <ul>
                        {taskList.map((item, index) => {
                            return <div>
                                <li className='text-none' key={index}>
                                    {item}
                                    <span className='ml-44'>Edit</span>
                                    <span className='ml-5'>Delete</span>
                                </li>
                            </div>
                        })}
                    </ul>
                </div>


            </div>


        </div>
    )
}

export default LandingPage