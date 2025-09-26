import React, { useState } from 'react'

const TodoForm = ({ onAddTodo }) => {
    const [inputValue, setInputValue]  = useState('')

    const handleFormSubmit = (e)  =>  {
        e.preventDefault()
        if (inputValue.trim() !== "") {
            onAddTodo(inputValue)
            setInputValue("")
        }
    }
  return (
    <form onSubmit={handleFormSubmit}>
      <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new to do..."
        className=''
      />
      <button 
       type='submit'
      className='p-3 bg-blue-500'>
        Add Todo
      </button>
    </form>
  )
}

export default TodoForm
