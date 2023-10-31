import { createSlice } from '@reduxjs/toolkit'
import { type Todo } from '../../todoMattApp/Types/InterTodo'

const DEFAULT_STATE: Todo[] = [
  {
    id: crypto.randomUUID(),
    todoTitle: 'Eliminá este todo y crea uno tuyo!',
    completed: false
  }
]

const initialState: Todo[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__')
  if (persistedState != null) return JSON.parse(persistedState).users
  return DEFAULT_STATE
})()

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addReducer: (state) => state
  }
})

// Action creators are generated for each case reducer function
export const { addReducer } = todoSlice.actions
