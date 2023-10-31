import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../todoMattApp/pages/Dashboard'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}
