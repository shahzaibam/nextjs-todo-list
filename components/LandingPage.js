import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import PendingTask from './PendingTask'
import CompletedTask from './CompletedTask'


const LandingPage = () => {
    const [taskList, setTaskList] = useState([])
    const [task, setTask] = useState('')
    const [completedTask, setCompletedTask] = useState([])


    function addTodo(e) {
        e.preventDefault()
        if (task.trim() === '') return

        const newTask = { id: Date.now(), text: task }
        setTaskList([...taskList, newTask])
        setTask('')
    }


    const pendingTaskProps = {
        taskList,
        setTaskList,
        completedTask,
        setCompletedTask
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
                            <PendingTask {...pendingTaskProps} />
                        </ul>
                    </div>



                    {/* COMPLETED TASKS */}
                    {completedTask.length > 0 && (
                        <CompletedTask completedTask={completedTask} setCompletedTask={setCompletedTask} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default LandingPage
