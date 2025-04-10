import { Routes, Route } from 'react-router-dom'
import { LoginForm } from './pages/LoginForm'
import { Dashboard } from './pages/Dashboard'
import { ProtectedRoute } from './routes/ProtectedRoute'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}