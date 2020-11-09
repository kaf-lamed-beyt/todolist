import React from "react"

const CreateItem = () => {
  const [todoItem, setTodoItem] = React.useState("")

  const handleSubmit = event => {
    // prevents the browser from reloading
    // on form submit
    event.preventDefault()

    if (!todoItem) return
    createTodoItem(todoItem)
    setTodoItem("")
  }

  // spreads the todo items and adds
  // the new item to the list
  function createTodoItem(text) {
    const newTodoItem = [...todoItem, { text }]
    setTodoItem(newTodoItem)
  }

  return (
    <form onSubmit={handleSubmit} className='input-sect'>
      <input
        type='text'
        className='input-todo'
        value={todoItem}
        onChange={e => setTodoItem(e.target.value)}
      />
      <button onClick={handleSubmit}>
        <i className='fas fa-plus'></i>
      </button>
    </form>
  )
}

export default CreateItem
