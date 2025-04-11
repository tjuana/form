import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from '@lib/toast'
import { users } from '@api/users'

type UseAutofillDemoUserProps<T extends Record<string, string>> = {
  values: T
  setValue: <K extends keyof T>(key: K, val: T[K]) => void
}

export const useAutofillDemoUser = <T extends Record<string, string>>({
  values,
  setValue,
}: UseAutofillDemoUserProps<T>) => {
  const [params] = useSearchParams()

  useEffect(() => {
    const demo = params.get('demo')
    const index = Number(demo)

    if (demo && !users[index]) {
      toast.error('Invalid demo number, use /?demo=0 or /?demo=1 or /?demo=2')
      return
    }

    if (demo && values.email === '' && values.password === '' && users[index]) {
      const user = users[index]
      Object.entries(user).forEach(([key, val]) => {
        if (key in values) {
          setValue(key as keyof T, val as T[keyof T])
        }
      })
    }
  }, [params, setValue, values])
}