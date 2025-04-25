import React, { useState } from 'react'
import TrashIconButton from './TrashIconButton';

const CompletedTask = ({ completedTask, setCompletedTask }) => {


    function deleteCompletedTask(taskId) {
        if (taskId) {
            const taskToDelete = completedTask.filter(task => task.id !== taskId);
            setCompletedTask(taskToDelete);
        }
    }

    return (
        <div >
            <h2 className="text-2xl font-semibold mb-4">Completed Tasks</h2>
            <ul className="space-y-4">
                {completedTask.map((item) => (
                    <li key={item.id} className="flex justify-between items-center bg-green-100 text-green-800 px-6 py-4 rounded-xl line-through" >
                        <span className="text-lg">{item.text}</span>
                        <span onClick={() => deleteCompletedTask(item.id)} className="cursor-pointer text-green-600 hover:text-green-800 transition-colors">
                            <TrashIconButton />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CompletedTask