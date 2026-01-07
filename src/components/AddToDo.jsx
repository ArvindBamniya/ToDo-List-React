import React, { useState } from 'react'
import { Trash2 } from 'lucide-react'

const AddToDo = () => {
    const [ task, setTask ] = useState('')
    const [ list, setList ] = useState([])

    const addTodo = () => {
        if (task.trim() === '') return
        setList([ ...list, task ])
        setTask('')
    }
    const deleteTask = (i) => {
        const newList = [ ...list ]
        newList.splice(i, 1)
        setList(newList)
    }

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center px-4">
            {/* Heading */}
            <span>©2026arvindBamniya</span>
            <h1 className="mt-10 text-[#fff2df] text-3xl sm:text-4xl md:text-6xl font-bold">
                ToDo List
            </h1>

            {/* Form */}
            <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-10 w-full sm:w-4/5 md:w-1/2 flex flex-col sm:flex-row gap-4"
            >
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter the task"
                    className="bg-white w-full sm:flex-1 py-3 px-5 rounded-3xl text-lg md:text-2xl outline-none"
                />
                <button
                    onClick={addTodo}
                    className="bg-cyan-600 text-white text-lg md:text-xl px-6 py-3 rounded-3xl font-semibold cursor-pointer active:scale-95"
                >
                    Add Task
                </button>
            </form>

            {/* Todo List */}
            <div className="mt-8 w-full sm:w-4/5 md:w-1/2">
                {list.map((todo, i) => (
                    <ul
                        key={i}
                        className="mt-4 p-4 rounded-2xl text-base md:text-xl bg-white flex justify-between items-center"
                    >
                        <li className="break-words max-w-[80%]">{todo}</li>
                        <Trash2
                            onClick={() => deleteTask(i)}
                            className="cursor-pointer text-gray-700 hover:text-red-600 active:scale-95"
                            size={26}
                            strokeWidth={1.75}
                        />
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default AddToDo
