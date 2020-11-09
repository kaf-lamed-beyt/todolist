import React from "react"

import TodoList from "./components/TodoList"
import CreateItem from "./components/CreateItem"

const App = () => {
  const [todoItem, setTodoItem] = React.useState([
    {
      id: 0,
      text: "Hello there!",
      isCompleted: false,
    },
    {
      id: 1,
      text: "What's happening in this life!",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Even small money sef, someone di nor have",
      isCompleted: false,
    },
  ])

  // spreads the todo items and adds
  // the new item to the list
  function createTodoItem(text) {
    const newTodoItem = [...todoItem, { text }]
    setTodoItem(newTodoItem)

    console.log(text)
  }

  // complete todo item
  const complete = id => {
    let newTodoItem = [...todoItem]
    newTodoItem[id].isCompleted = true
    setTodoItem(newTodoItem)
  }

  const deleteTodo = id => {
    let newTodoItem = [...todoItem]
    newTodoItem.splice(id, 1)
    setTodoItem(newTodoItem)
  }

  return (
    <div className='app__base'>
      <h2>Hello Todos</h2>
      {todoItem.map(what => {
        return (
          <TodoList>
            <TodoItem
              key={what.id}
              todoItem={what}
              complete={complete}
              deleteTodo={deleteTodo}
            />
          </TodoList>
        )
      })}
      <CreateItem createTodoItem={createTodoItem} />
    </div>
  )
}

export default App

const TodoItem = ({ todoItem, id, complete, deleteTodo }) => {
  return (
    <div
      className='todo-item'
      style={{ textDecoration: todoItem.isCompleted ? "line-through" : "" }}
    >
      {todoItem.text}
      <div className='item-control'>
        <button onClick={() => complete(id)}>done</button>
        <button onClick={() => deleteTodo(id)}>del</button>
      </div>
    </div>
  )
}

// const user = prompt("Hello there :wave:, what is your name?")

// if (user) {
//   return (
//     <h3>Hello {user} what do you want to do today? </h3>
//   )
// }
