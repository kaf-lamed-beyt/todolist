import React from "react"

const CreateItem = ({ createTodoItem }) => {
  const [todoItem, setTodoItem] = React.useState("")

  const createTodoItem = (item) => {
    let newTodoItems = [...todoItem, {item}]
    setTodoItem(newTodoItems)
  }
  
  const handleSubmit = event => {
    // prevents the browser from reloading
    // on form submit
    event.preventDefault()

    todoItem ? createTodoItem(todoItem) : setTodoItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="input-sect">
      <input
        type='text'
        className='input-todo'
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}

export default CreateItem
