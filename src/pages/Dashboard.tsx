import { useAuth } from '../context/AuthContext'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { toast } from '../lib/toast'
export const Dashboard = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    toast.success('Logged out successfully')
    navigate('/')
  }

  return (
    <div className="max-w-md mx-auto text-center mt-20">
      <h1 className="text-xl font-semibold mb-4">Welcome, {user}!</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}