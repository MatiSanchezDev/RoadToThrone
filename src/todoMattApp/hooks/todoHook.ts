import { useAppDispatch, useAppSelector } from './store'
import { type Todo } from '../Types/InterTodo'
import { completedTodo, deleteTodo, editStateTodo, editTodo, newTodo } from '../../store/slices/todoSlice'

export const todoHook = () => {
  const todos = useAppSelector(state => state.todo)
  const dispatch = useAppDispatch()

  const saveTodo = (payload: Todo) => {
    dispatch(newTodo(payload))
  }

  const delTodo = (payload: Todo) => {
    dispatch(deleteTodo(payload))
  }

  const completeTodo = (payload: Todo) => {
    dispatch(completedTodo(payload))
  }

  const changeEdit = (todo: Todo): void => {
    dispatch(editStateTodo(todo))
  }

  const onEditTodo = (todo: Todo): void => {
    dispatch(editTodo(todo))
  }

  return {
    todos,
    saveTodo,
    delTodo,
    completeTodo,
    changeEdit,
    onEditTodo
  }
}
