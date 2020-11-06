import React from "react"
import TodoList from "./components/TodoList"
import TodoItem from "./components/TodoItem"

const App = ({ todo }) => {
  return (
    <div className='app__base'>
      <h2>Hello Todos</h2>
      <TodoList>
        <TodoItem todo={todo} />
      </TodoList>
    </div>
  )
}

export default App
