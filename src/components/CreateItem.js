import React from "react"

const CreateItem = ({ createTodoItem }) => {
  const [value, setTodoValue] = React.useState("")

  const handleSubmit = event => {
    // prevents the browser from reloading
    // on form submit
    event.preventDefault()

    if (!value) return
    createTodoItem(value)
    setTodoValue("")
  }

  return (
    <form onSubmit={handleSubmit} className='input-sect'>
      <input
        type='text'
        className='input-todo'
        value={value}
        onChange={e => setTodoValue(e.target.value)}
      />
      <button onClick={handleSubmit}>
        <i className='fas fa-plus'></i>
      </button>
    </form>
  )
}

export default CreateItem
