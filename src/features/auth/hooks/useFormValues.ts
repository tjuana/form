import { useState } from 'react'

export const useFormValues = <T extends Record<string, string>>(initialValues: T) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = (key: keyof T) => (val: string) => {
    setValues((prev) => ({ ...prev, [key]: val }))
  }

  const setValue = (key: keyof T, val: string) => {
    setValues((prev) => ({ ...prev, [key]: val }))
  }

  return { values, handleChange, setValue }
}