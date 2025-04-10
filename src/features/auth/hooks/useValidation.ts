import { useEffect, useState } from 'react'

type ValidationFn = (value: string) => string | undefined

export const useLiveValidation = (
  value: string,
  validateFn: ValidationFn,
  touchedOnMount = false
) => {
  const [error, setError] = useState<string | undefined>()
  const [touched, setTouched] = useState(touchedOnMount)

  useEffect(() => {
    if (touched) {
      setError(validateFn(value))
    }
  }, [value, touched, validateFn])

  const onBlur = () => setTouched(true)
  const markTouched = () => setTouched(true)

  return {
    error,
    onBlur,
    markTouched,
  }
}

export const validateEmail = (email: string): string | undefined => {
  if (!email) return 'Email is required'
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email) ? undefined : 'Invalid email format'
}

export const validatePassword = (password: string): string | undefined => {
  if (!password) return 'Password is required'
  if (password.length < 6) return 'Password must be at least 6 characters'
  return undefined
}