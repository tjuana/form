import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../Button'
import { vi } from 'vitest'

describe('Button component', () => {
  test('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  test('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)

    fireEvent.click(screen.getByRole('button', { name: 'Click' }))
    expect(handleClick).toHaveBeenCalled()
  })

  test('has type submit when specified', () => {
    render(<Button type="submit">Submit</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  })

  test('is disabled when disabled is true', () => {
    render(<Button disabled>Disabled</Button>)
    const btn = screen.getByRole('button', { name: 'Disabled' })

    expect(btn).toBeDisabled()
    expect(btn).toHaveAttribute('aria-disabled', 'true')
  })

  test('shows loading state when loading is true', () => {
    render(<Button loading>Submit</Button>)
    const btn = screen.getByRole('button', { name: 'Loading...' })

    expect(btn).toHaveAttribute('aria-busy', 'true')
    expect(btn).toBeDisabled()
  })

  test('applies fullWidth class when fullWidth is true', () => {
    const { container } = render(<Button fullWidth>Full</Button>)
    const btn = container.querySelector('button')

    expect(btn).toHaveClass('w-full')
  })

  test('applies custom className', () => {
    const { container } = render(<Button className="custom-class">Test</Button>)
    const btn = container.querySelector('button')

    expect(btn).toHaveClass('custom-class')
  })

  test('sets aria-label when provided', () => {
    render(<Button ariaLabel="Close Menu">X</Button>)
    expect(screen.getByRole('button', { name: 'Close Menu' })).toBeInTheDocument()
  })
})