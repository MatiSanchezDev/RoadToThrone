import { configureStore } from '@reduxjs/toolkit'
import { todoSlice } from './slices/todoSlice'

const persistanceLocalStorageMiddleware = (store: { getState: () => any }) => (next: (arg0: any) => void) => (action: any): void => {
  next(action)
  localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
}

export const store = configureStore({
  reducer: { todo: todoSlice.reducer },
  middleware: [persistanceLocalStorageMiddleware]
})

export type RootState = ReturnType <typeof store.getState>
export type appDispatch = typeof store.dispatch
