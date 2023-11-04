export type UserId = string
export type TodoTitle = string
export type Completed = boolean
export type EditTodo = boolean

export interface Todo {
  id: string
  todoTitle: string
  completed: boolean
  editTodo: boolean
}

export interface completedTodo {
  id: UserId
  completed: Completed
}
