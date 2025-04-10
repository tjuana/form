import { createContext, useContext, useState, ReactNode } from 'react'
import { login as apiLogin } from '../api/auth'

type AuthContextType = {
  user: string | null
  login: (credentials: { email: string; password: string }) => Promise<void>
  logout: () => void
  isLoggedIn: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null)

  const login = async (credentials: { email: string; password: string }) => {
    await apiLogin(credentials)
    setUser(credentials.email)
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}