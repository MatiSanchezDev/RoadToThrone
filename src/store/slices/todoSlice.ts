import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type Todo } from '../../todoMattApp/Types/InterTodo'

const DEFAULT_STATE: Todo[] = [
  {
    id: crypto.randomUUID(),
    todoTitle: 'Eliminá este todo y crea uno tuyo!',
    completed: false,
    editTodo: false
  }
]

const initialState: Todo[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__')
  if (persistedState != null) return JSON.parse(persistedState).todo
  return DEFAULT_STATE
})()

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    newTodo: (state, { payload }: PayloadAction<Todo>) => {
      state.push(payload)
    },
    completedTodo: (state, { payload }: PayloadAction<Todo>) => {
      const findTodo = state.find(todo => todo.id === payload.id)
      if (findTodo !== undefined) {
        findTodo.completed = !payload.completed
      }
    },
    deleteTodo: (state, { payload }: PayloadAction<Todo>) => {
      const findTodo = state.findIndex(todo => todo.id === payload.id)
      if (findTodo !== -1) {
        state.splice(findTodo, 1)
      } else {
        console.log('Todo No encontrado')
      }
    },
    editStateTodo: (state, { payload }: PayloadAction<Todo>) => {
      const findTodo = state.find(todo => todo.id === payload.id)
      if (findTodo !== undefined) {
        findTodo.editTodo = !payload.editTodo
      }
    },
    editTodo: (state, { payload }: PayloadAction<Todo>) => {
      const findTodo = state.find(todo => todo.id === payload.id)
      if (findTodo !== undefined) {
        findTodo.id = payload.id
        findTodo.todoTitle = payload.todoTitle
        findTodo.completed = payload.completed
        findTodo.editTodo = payload.editTodo
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { newTodo, deleteTodo, completedTodo, editStateTodo, editTodo } = todoSlice.actions
