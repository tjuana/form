import React, { useState, useEffect } from 'react'
import { Button } from '../components/Button'
import { useLiveValidation, validateEmail, validatePassword } from '../features/auth/hooks/useValidation'
import { toast } from '../lib/toast'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { login } from '../api/auth'
import { setUser } from '../store/authSlice'
import { LoginFields } from '../features/auth/ui/LoginFields'
import { useLoginFields } from '../features/auth/hooks/useLoginFields'


const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector((state) => state.auth.user !== null)

  const { values, handleChange, errors, onBlurs } = useLoginFields()
  const { email, password } = values

  const emailValidation = useLiveValidation(email, validateEmail)
  const passwordValidation = useLiveValidation(password, validatePassword)

  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard')
    }
  }, [isLoggedIn, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    emailValidation.markTouched()
    passwordValidation.markTouched()

    if (emailValidation.error || passwordValidation.error) {
      toast.error('Fix validation errors before submitting')
      return
    }
  
    setIsSubmitting(true)
  
    try {
      const user = await login({ email, password })
      dispatch(setUser(user))
      toast.success('Login successful')
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Login failed')
      return
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-sm md:max-w-md mx-auto container border border-gray-300 rounded-md p-4 shadow-md mt-20"
      role="form"
      noValidate
    >
      <h2 id="form-heading" className="text-xl font-semibold mb-4">
        Sign In
      </h2>

      <LoginFields
        values={values}
        handleChange={handleChange}
        errors={errors}
        onBlurs={onBlurs}
      />

      <Button type="submit" loading={isSubmitting} fullWidth ariaLabel="Login">
        Login
      </Button>
    </form>
  )
}

export default LoginForm