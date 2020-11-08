import React from "react"

const TodoItem = ({ what }) => {
  return <div className='todo-item'>{what.text}</div>
}

export default TodoItem
