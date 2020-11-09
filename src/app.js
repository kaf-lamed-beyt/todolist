import React from "react"

import TodoList from "./components/TodoList"
import TodoItem from "./components/TodoItem"
import CreateItem from "./components/CreateItem"

const App = ({ todo, createTodoItem }) => {

  return (
    <div className='app__base'>
      <h2>Hello Todos</h2>
      <TodoList>
        <TodoItem todo={todo} />
      </TodoList>
      <CreateItem createTodoItem={createTodoItem} />
    </div>
  )
}

export default App

// const user = prompt("Hello there :wave:, what is your name?")

// if (user) {
//   return (
//     <h3>Hello {user} what do you want to do today? </h3>
//   )
// }
