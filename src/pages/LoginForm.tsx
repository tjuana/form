import React, { useState, useEffect } from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useLiveValidation, validateEmail, validatePassword } from '../hooks/useValidation'
import { toast } from '../lib/toast'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useFormValues } from '../hooks/useFormValues'

export const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { values, handleChange } = useFormValues({
    email: '',
    password: '',
  })

  const { email, password } = values

  const emailValidation = useLiveValidation(email, validateEmail)
  const passwordValidation = useLiveValidation(password, validatePassword)

  const { login: loginUser, isLoggedIn } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard', { replace: true })
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
      await loginUser({ email, password })
      toast.success('Login successful')
    } catch {
      toast.error('Login failed. Try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-md mx-auto container border border-gray-300 rounded-md p-4 shadow-md mt-20"
      role="form"
      noValidate
    >
      <h2 id="form-heading" className="text-xl font-semibold mb-4">
        Sign In
      </h2>

      <Input
        id="email"
        label="Email"
        value={email}
        onChange={handleChange('email')}
        error={emailValidation.error}
        type="email"
        autoComplete="email"
        onBlur={emailValidation.onBlur}
        autoFocus
      />

      <Input
        id="password"
        label="Password"
        value={password}
        onChange={handleChange('password')}
        error={passwordValidation.error}
        type="password"
        autoComplete="current-password"
        onBlur={passwordValidation.onBlur}
      />

      <Button type="submit" loading={isSubmitting} fullWidth ariaLabel="Login">
        Login
      </Button>
    </form>
  )
}