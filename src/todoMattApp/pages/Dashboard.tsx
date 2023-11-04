import { useState } from 'react'
import { todoHook } from '../hooks/todoHook'
import { type Todo } from '../Types/InterTodo'

export const Dashboard = () => {
  const { todos, saveTodo, delTodo, completeTodo, changeEdit, onEditTodo } = todoHook()
  const [todoInput, setTodoInput] = useState('')
  const [text, setText] = useState('')

  const onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setTodoInput(e.currentTarget.value)
  }

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value)
  }

  const onSubmitForm = (e: React.FormEvent): void => {
    e.preventDefault()
    if (todoInput.length <= 2) return
    const newTodo = {
      id: crypto.randomUUID(),
      todoTitle: todoInput,
      completed: false,
      editTodo: false
    }
    saveTodo(newTodo)
    setTodoInput('')
  }

  const deleteTodo = (todo: Todo) => {
    delTodo(todo)
  }

  const completedTodo = (todo: Todo) => {
    completeTodo(todo)
  }

  const changeStateTodo = (todo: Todo): void => {
    changeEdit(todo)
  }

  const onEditTodoForm = (e: React.FormEvent, todo: Todo): void => {
    e.preventDefault()
    if (text.length <= 2) return
    const newEditTodo = {
      id: todo.id,
      todoTitle: text,
      completed: todo.completed,
      editTodo: false
    }
    onEditTodo(newEditTodo)
    setTodoInput('')
  }

  return (
    <>
      <h1>Todo List</h1>
      <h2>Total Todos: {todos.length}</h2>
      <hr />
      <div>
        <div>
          {todos?.map(todo => (
            <div key={todo.id} className='flex'>
              <div onDoubleClick={() => { changeStateTodo(todo) }}>
                <p className={!todo.editTodo ? '' : 'hidden'}>{todo.todoTitle}</p>
                <form onSubmit={(e) => { onEditTodoForm(e, todo) }} className={todo.editTodo ? 'flex' : 'hidden'}>
                <input
                 type="text" value={text}
                 onChange={handleEdit}
                 placeholder='Titulo de tu Todo'/>
                 <button type='submit'>
                 ✔️
                 </button>
                </form>
              </div>
              <input type="checkbox" checked={todo.completed} onChange={() => { completedTodo(todo) }}/>
              <button onClick={() => { deleteTodo(todo) }}>Delete</button>
            </div>
          ))}
        </div>
        <form onSubmit={onSubmitForm} >
          <input type="text" placeholder='Titulo de tu Todo' onChange={onInputChange}/>
          <button type='submit'>Nuevo Todo</button>
        </form>
      </div>
    </>
  )
}
