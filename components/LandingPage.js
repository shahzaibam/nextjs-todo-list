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

            <div className='bg-green-500 w-1/2 h-[20] mx-auto'>

                <div >
                    <form className='mt-32'>
                        <input type='text' className='border-[1px]' onChange={(e) => setTask(e.target.value)} value={task} />
                        <input type='submit' value="Add" className='border-[1px] ml-4' onClick={(e) => addTodo(e)} />
                    </form>
                </div>


                <div>
                    <ul>
                        {taskList.map((item, index) => {
                            return <li className='text-none' key={index}>
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