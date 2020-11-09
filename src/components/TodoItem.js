import React from "react"

const TodoItem = ({ what, id, done, remove}) => {

    // deletes a todo item 
    const deleteTodo = (id) => {
      const newTodoItem = [...todoItem]
      newTodoItem.splice(id, 1);
      setTodoItem(newTodoItem)
    }

    // strikethrough a todo item once its done
    const completed = (id) => {
      const newTodoItem = [...todoItem]
      newTodoItem[id].isCompleted = true
      setTodoItem(newTodoItem)
    } 

  return (
    <div className='todo-item'>
      {what.text}
      <div className="item-control">
        <button onClick={() => completed(id)}><i className="fas fa-check"></i></button>
        <button onClick={() => deleteTodo(id)}><i className="far fa-trash-alt"></i></button>
      </div>
    </div>
  )
}

export default TodoItem
