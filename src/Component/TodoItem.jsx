import React from 'react'

const TodoItem = (  { todo, onToggleComplete, onRemoveTodo } ) => {
  return (
        <li className='flex items-center justify-between  p-4'>
            <span
            className={` flex-1  ${
                todo.completed ? 'line-through text-gray-400'  : 'text-gray-800'
            }`}>
                {todo.text}
           </span>
            <div>
                <button
                  onClick={() => onToggleComplete(todo.id)}
                  className={`${todo.completed  ? 'bg-yellow-500 hover:bg-yellow-600':  'bg-green-500  hover:bg-green-600' }`}
                >
                    {todo.completed  ? 'Undo' : 'Complete'}
                </button>
                <button
                 onClick = {()=> onRemoveTodo(todo.id )}
                 className='px-3 py-1 bg-red-500  text-white rounded-md hover:bg-red-600 transition-colors'
                >
                    Remove
                </button>
            </div>
        </li>
  )
}

export default TodoItem
