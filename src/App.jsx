import React, { use, useEffect } from 'react'
import Header from './Component/Header';
import TodoList from './Component/TodoList';

const App = () => {
  const [todos,setTodos]  = useState(()=> {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : [];
})

   //Use effect to save todos to local storag whenever they change

   useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
   }, [todos]);

     const handleAddTodo  =  (text)  =>  {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id:Date.now(), text  ,completed: false}
      ])
    };


   const handleToggleComplete = (id)  => {
    setTodos((prevTodos)  =>
       prevTodos.map((todo) =>
          todo.id === id ? {...todo, completed :  todo.completed} : todo 
      )
    );
  }


  const handleRemoveTodo = (id)  => {
    setTodos((prevTodos)  => 
      prevTodos.filter((todo) => 
        todo.id !== id)
  
  )
  }
  return (
    <div className='min-h-screen  bg-gray-100 p-4'>
      <div className='max-w-xl mx-auto'>
        <Header  />
          <div className='my-6'>
            <Todoform  onAddTodo = {onAddTodo} />
          </div>
          <TodoList  
            todos = {todos}
            onToggleComple={handleToggleComplete}
            onRemovetodo ={handleRemoveTodo}
          
          />

      </div>
      
    </div>
  )
}

export default App
