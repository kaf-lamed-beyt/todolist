import React from "react"
import TodoItem from "../components/TodoItem"

import { list } from "../../assets/data"

const TodoList = () => {
  return (
    <div className='todo-list'>
      {list.map(todo => {
        return (
          <TodoItem
            done={completed}
            remove={deleteTodo}
            what={todo}
            key={todo.id}
          />
        )
      })}
    </div>
  )
}

export default TodoList
