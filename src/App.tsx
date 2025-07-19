import React from 'react'
import './App.css'
import InputFeild from './components/InputFeild'
import TodoList from './components/TodoList'

const App: React.FC = () => {
  return (
    <>
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputFeild  />
      <TodoList  />
    </div>
    </>
  )
}

export default App
