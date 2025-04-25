import React from 'react'
import TrashIconButton from './TrashIconButton';



const PendingTask = ({ taskList, setTaskList, setCompletedTask, completedTask }) => {


    function deletePendingTask(taskId) {
        if (taskId) {
            const taskToDelete = taskList.filter(task => task.id !== taskId);
            setTaskList(taskToDelete);
        }
    }

    function taskDone(e, taskId) {
        if (e.target.checked) {
            const taskFinished = taskList.find(task => task.id === taskId)
            setCompletedTask([...completedTask, taskFinished])
            setTaskList(taskList.filter(task => task.id !== taskId))
        }
    }

    return (
        <>

            {
                taskList.length > 0 ? (
                    taskList.map((item) => (
                        <li key={item.id} className="flex justify-between items-center bg-white shadow rounded-xl px-6 py-4">
                            <span className="text-lg">{item.text}</span>
                            <div className="flex gap-4 items-center">
                                <input
                                    type="checkbox"
                                    onChange={(e) => taskDone(e, item.id)}
                                    className="h-5 w-5 cursor-pointer"
                                />
                                <span onClick={() => deletePendingTask(item.id)} className="cursor-pointer text-red-500 hover:text-red-700 transition-colors">
                                    <TrashIconButton />
                                </span>
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="text-gray-500 text-lg italic">
                        Start adding your to-dos ✨
                    </li>

                )
            }
        </>

    )
}

export default PendingTask