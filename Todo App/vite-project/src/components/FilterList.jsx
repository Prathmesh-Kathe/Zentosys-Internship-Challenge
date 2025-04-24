import React from 'react'

const FILTERS = {
  all: () => true,
  completed: task => task.completed,
  pending: task => !task.completed,
};
const FilterList = ({filter , setFilter}) => {
  
  return (
    <div>
      <div className="flex gap-2 justify-center mb-4">
        {Object.keys(FILTERS).map(key => (
          <button
            key={key}
            className={`px-3 py-1 rounded ${filter === key ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setFilter(key)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterList
