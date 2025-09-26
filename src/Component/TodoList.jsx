import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onToggleComplete, onRemoveTodo}) => {
  return (
    <ul  className='space-y-4'>
        {
         todos.length === 0  ? (
            <p>No added yet, Add one!</p>
         ):( 
           todos.map((todo) =>(
            <TodoItem
             key={todo.id}
             todo={todo}
             onToggleComplete={onToggleComplete}
             onRemoveTodo={onRemoveTodo}
            />
           ) )
          )
        }
    </ul>
      
  )
}

export default TodoList
