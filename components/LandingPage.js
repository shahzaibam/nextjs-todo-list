import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'
import PendingTask from './PendingTask'
import { FaTrash } from "react-icons/fa"


const LandingPage = () => {
    const [taskList, setTaskList] = useState([])
    const [completedTask, setCompletedTask] = useState([])
    const [task, setTask] = useState('')


    function addTodo(e) {
        e.preventDefault()
        if (task.trim() === '') return

        const newTask = { id: Date.now(), text: task }
        setTaskList([...taskList, newTask])
        setTask('')
    }


    function deletePendingTask(taskId) {
        if (taskId) {
            const taskToDelete = taskList.filter(task => task.id !== taskId);
            setTaskList(taskToDelete);
        }
    }


    function deleteCompletedTask(taskId) {
        if (taskId) {
            const taskToDelete = completedTask.filter(task => task.id !== taskId);
            setCompletedTask(taskToDelete);
        }
    }


    return (
        <div className="bg-[#f1f1f1] min-h-screen text-black">
            <Navbar />

            <div className="w-full max-w-3xl mx-auto py-20 px-6">
                <h1 className="text-center text-5xl md:text-7xl uppercase font-bold tracking-tighter leading-tight mb-16">
                    My To Do List
                </h1>

                <form onSubmit={addTodo} className="flex justify-center gap-4 mb-10 flex-wrap">
                    <input type="text" className="border border-gray-300 rounded-full px-6 py-3 w-full sm:w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                        placeholder="What do you need to do?" onChange={(e) => setTask(e.target.value)} value={task} />

                    <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full text-xl hover:bg-blue-700 transition-all">
                        Add
                    </button>
                </form>


                {/* PENDING TASKS */}
                <div className="space-y-10">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Pending Tasks</h2>
                        <ul className="space-y-4">
                            <PendingTask taskList={taskList} setTaskList={setTaskList} setCompletedTask={setCompletedTask} completedTask={completedTask} />
                        </ul>
                    </div>



                    {/* COMPLETED TASKS */}
                    {completedTask.length > 0 && (
                        <div >
                            <h2 className="text-2xl font-semibold mb-4">Completed Tasks</h2>
                            <ul className="space-y-4">
                                {completedTask.map((item) => (
                                    <li key={item.id} className="flex justify-between items-center bg-green-100 text-green-800 px-6 py-4 rounded-xl line-through" >
                                        <span className="text-lg">{item.text}</span>
                                        <span onClick={() => deleteCompletedTask(item.id)} className="cursor-pointer text-green-600 hover:text-green-800 transition-colors">
                                            <FaTrash />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LandingPage
