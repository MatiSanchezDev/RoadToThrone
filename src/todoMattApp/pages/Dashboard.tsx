import { useAppSelector } from '../hooks/store'

export const Dashboard = () => {
  const todo = useAppSelector(state => state.todo)
  console.log(todo)
  return (
    <>
      <div>{todo[0].todoTitle}</div>
    </>
  )
}
