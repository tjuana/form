import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from '../Input'
import { vi } from 'vitest'

describe('Input component', () => {
  const baseProps = {
    id: 'email',
    label: 'Email',
    value: '',
    onChange: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('renders input with label', () => {
    render(<Input {...baseProps} />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  test('calls onChange when typing', () => {
    render(<Input {...baseProps} />)
    const input = screen.getByLabelText('Email') as HTMLInputElement

    fireEvent.change(input, { target: { value: 'test@example.com' } })

    expect(baseProps.onChange).toHaveBeenCalledWith('test@example.com')
  })

  test('applies error styles and message', () => {
    render(<Input {...baseProps} error="Invalid email" />)

    const input = screen.getByLabelText('Email')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  test('renders placeholder inside label', () => {
    render(<Input {...baseProps} value="something" />)
    const label = screen.getByText('Email')
    expect(label).toHaveClass('top-1')
  })

  test('label stays floating on focus', () => {
    render(<Input {...baseProps} />)
    const input = screen.getByLabelText('Email')

    fireEvent.focus(input)

    const label = screen.getByText('Email')
    expect(label).toHaveClass('top-1')
  })

  test('calls onFocus and onBlur if provided', () => {
    const onFocus = vi.fn()
    const onBlur = vi.fn()

    render(<Input {...baseProps} onFocus={onFocus} onBlur={onBlur} />)
    const input = screen.getByLabelText('Email')

    fireEvent.focus(input)
    expect(onFocus).toHaveBeenCalled()

    fireEvent.blur(input)
    expect(onBlur).toHaveBeenCalled()
  })

  test('supports different input types', () => {
    render(<Input {...baseProps} type="password" />)
    const input = screen.getByLabelText('Email')
    expect(input).toHaveAttribute('type', 'password')
  })

  test('input is focused when autoFocus is true', () => {
    render(<Input {...baseProps} autoFocus />)
    const input = screen.getByLabelText('Email')
  
    expect(input).toHaveFocus()
  })

  test('sets autoComplete and autoFocus props', () => {
    render(<Input {...baseProps} autoComplete="email" />)
    const input = screen.getByLabelText('Email')
  
    expect(input).toHaveAttribute('autocomplete', 'email')
  })

  test('error placeholder is hidden when no error', () => {
    render(<Input {...baseProps} />)
    const errorText = screen.getByText('placeholder')

    expect(errorText).toHaveClass('invisible')
  })
})