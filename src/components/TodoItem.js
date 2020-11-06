import React from "react"

import { todoItem } from "../../assets/data"

const TodoItem = () => {
  return (
    <div className='todo-item'>
      {todoItem.map(what => {
        return (
          <ul key={what.id}>
            <li>{what.text}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default TodoItem
