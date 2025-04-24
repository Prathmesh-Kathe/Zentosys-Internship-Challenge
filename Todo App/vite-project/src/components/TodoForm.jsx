
const TodoList = ({input , setInput , tasks ,setTasks}) => {

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };
  
  return (
    <>
    <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>

    <div className="flex gap-2 mb-4">
      <input
        type="text"
        className="flex-grow p-2 border rounded"
        placeholder="Enter a task..."
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && addTask()}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={addTask}
      >
        Add
      </button>
    </div>
    </>
  )
}

export default TodoList
