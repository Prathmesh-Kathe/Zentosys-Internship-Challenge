import React from 'react'

const FILTERS = {
  all: () => true,
  completed: task => task.completed,
  pending: task => !task.completed,
};

const TodoLists = ({tasks,  setTasks , filter}) => {

  const deleteTask = id => setTasks(tasks.filter(t => t.id !== id));

  const toggleCompletion = id => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, text: newText } : t));
  };

  return (
    <div>
       <ul className="space-y-2">
        {tasks.filter(FILTERS[filter]).map(task => (
          <li key={task.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(task.id)}
            />
            <input
              type="text"
              value={task.text}
              onChange={e => updateTask(task.id, e.target.value)}
              className={`flex-grow bg-transparent outline-none border-b ${task.completed ? 'line-through text-gray-400' : ''}`}
            />
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoLists
