import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { toast } from '../lib/toast'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { logout } from '../store/authSlice'
import { useEffect } from 'react'

const Dashboard = () => {
  const user = useAppSelector((state) => state.auth.user)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/', { replace: true })
    }
  }, [user, navigate])

  const handleLogout = () => {
    dispatch(logout())
    console.log('LOGOUT CLICKED')
    toast.success('Logged out successfully')
    navigate('/', { replace: true })
  }

  return (
    <div className="max-w-sm md:max-w-md mx-auto text-center mt-20 flex flex-col gap-4 items-center border border-gray-300 rounded-md p-4 shadow-md">
      <h1 className="text-xl font-semibold">Welcome, {user?.name}!</h1>
      <h2 className="text-lg font-semibold">with email {user?.email}</h2>
      <p className="text-sm text-gray-500">if you want to logout, click the button below</p>
      <Button onClick={handleLogout} className="w-20">Logout</Button>
    </div>
  )
}

export default Dashboard
