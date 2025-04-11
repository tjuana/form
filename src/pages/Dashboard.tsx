import { useNavigate } from 'react-router-dom'

import { toast } from '@lib/toast'
import { useEffect } from 'react'
import { UserCard } from '@components/UserCard'

import { logout } from '@store/authSlice'
import { useAppDispatch, useAppSelector } from '@store/hooks'

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
    <UserCard
      name={user?.name ?? ''}
      email={user?.email ?? ''}
      onLogout={handleLogout}
    />
  )
}

export default Dashboard
