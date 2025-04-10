import { useFormValues } from './useFormValues'
import { useLiveValidation, validateEmail, validatePassword } from './useValidation'

export const useLoginFields = () => {
  const { values, handleChange } = useFormValues({
    email: '',
    password: '',
  })

  const emailValidation = useLiveValidation(values.email, validateEmail)
  const passwordValidation = useLiveValidation(values.password, validatePassword)

  return {
    values,
    handleChange,
    errors: {
      email: emailValidation.error,
      password: passwordValidation.error,
    },
    onBlurs: {
      email: emailValidation.onBlur,
      password: passwordValidation.onBlur,
    },
  }
}