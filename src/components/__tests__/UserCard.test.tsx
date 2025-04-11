import { render, screen, fireEvent } from '@testing-library/react'
import { UserCard } from '../UserCard'
import { vi } from 'vitest'

describe('UserCard', () => {
  const mockProps = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    onLogout: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('renders name and email correctly', () => {
    render(<UserCard {...mockProps} />)

    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
    expect(screen.getByText('jane@example.com')).toBeInTheDocument()
  })

  test('renders initial of name in avatar', () => {
    render(<UserCard {...mockProps} />)

    expect(screen.getByText('J')).toBeInTheDocument() // First letter
  })

  test('calls onLogout when logout button is clicked', () => {
    render(<UserCard {...mockProps} />)

    const button = screen.getByRole('button', { name: /logout/i })
    fireEvent.click(button)

    expect(mockProps.onLogout).toHaveBeenCalled()
  })
})