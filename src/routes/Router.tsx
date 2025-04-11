import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import FallbackSkeleton from '@sceletons/FallbackSkeleton'

const LoginForm = lazy(() => import('../pages/LoginForm'))
const Dashboard = lazy(() => import('../pages/Dashboard'))


const AppRoutes = () => {
  return (
      <Suspense fallback={<FallbackSkeleton />}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
  )
}

export default AppRoutes
