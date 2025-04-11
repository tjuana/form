import { render, screen, fireEvent } from '@testing-library/react'
import { LoginFields } from '../LoginFields'
import { vi } from 'vitest'

describe('LoginFields', () => {
  const values = {
    email: '',
    password: '',
  }

  const errors = {
    email: undefined,
    password: 'Required',
  }

  const handleChange = {
    email: vi.fn(),
    password: vi.fn(),
  }

  const onBlurs = {
    email: vi.fn(),
    password: vi.fn(),
  }

  const getComponent = () =>
    render(
      <LoginFields
        values={values}
        errors={errors}
        handleChange={(field) => handleChange[field]}
        onBlurs={onBlurs}
      />
    )

  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('renders email and password inputs with correct labels', () => {
    getComponent()

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  test('passes correct types and autocomplete', () => {
    getComponent()

    expect(screen.getByLabelText(/email/i)).toHaveAttribute('type', 'email')
    expect(screen.getByLabelText(/email/i)).toHaveAttribute('autocomplete', 'email')
    expect(screen.getByLabelText(/password/i)).toHaveAttribute('type', 'password')
    expect(screen.getByLabelText(/password/i)).toHaveAttribute('autocomplete', 'current-password')
  })

  test('calls handleChange when typing', () => {
    getComponent()

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'hello@test.com' },
    })

    expect(handleChange.email).toHaveBeenCalledWith('hello@test.com')
  })

  test('calls onBlur on input blur', () => {
    getComponent()

    fireEvent.blur(screen.getByLabelText(/email/i))
    fireEvent.blur(screen.getByLabelText(/password/i))

    expect(onBlurs.email).toHaveBeenCalled()
    expect(onBlurs.password).toHaveBeenCalled()
  })

  test('displays error message if error is passed', () => {
    getComponent()

    expect(screen.getByText('Required')).toBeInTheDocument()
  })
})