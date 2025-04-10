import { Input } from "../../../components/Input"

const fields = [
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    autoComplete: 'email',
    autoFocus: true,
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    autoComplete: 'current-password',
    autoFocus: false,
  },
] as const

type Props = {
  values: Record<'email' | 'password', string>
  handleChange: (field: 'email' | 'password') => (val: string) => void
  errors: Record<'email' | 'password', string | undefined>
  onBlurs: Record<'email' | 'password', () => void>
}

export const LoginFields = ({ values, handleChange, errors, onBlurs }: Props) => {
  return (
    <>
      {fields.map((field) => (
        <Input
          key={field.id}
          id={field.id}
          label={field.label}
          value={values[field.id]}
          onChange={handleChange(field.id)}
          error={errors[field.id]}
          type={field.type}
          autoComplete={field.autoComplete}
          onBlur={onBlurs[field.id]}
          autoFocus={field.autoFocus}
        />
      ))}
    </>
  )
}