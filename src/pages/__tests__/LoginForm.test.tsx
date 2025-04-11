import { describe, test, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from '../LoginForm'
import { Provider } from 'react-redux'
import { store } from '@store/index'
import { MemoryRouter } from 'react-router-dom'
import * as authApi from '@api/auth'
import { toast } from '@lib/toast'

vi.mock('@lib/toast', () => ({
  __esModule: true,
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
}))

beforeEach(() => {
  vi.clearAllMocks()
})

vi.mock('@api/auth', async () => {
  const actual = await vi.importActual<typeof import('@api/auth')>('@api/auth')
  return {
    ...actual,
    login: vi.fn(),
  }
})

const renderWithProviders = () => {
  return render(
    <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <LoginForm />
      </Provider>
    </MemoryRouter>
  )
}
describe('LoginForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('renders login form with email and password inputs', () => {
    renderWithProviders()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  test('shows validation errors if submitted with empty fields', async () => {
    renderWithProviders()

    await userEvent.click(screen.getByRole('button', { name: /login/i }))
  
    await waitFor(() => {
      expect(screen.getByText(/email is required/i)).toBeInTheDocument()
    })
  })

  test('calls login and dispatches user on valid credentials', async () => {
    const mockedLogin = authApi.login as unknown as ReturnType<typeof vi.fn>
    mockedLogin.mockResolvedValueOnce({ email: 'test@example.com', name: 'Test User' })

    renderWithProviders()

    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com')
    await userEvent.type(screen.getByLabelText(/password/i), 'password123')

    await userEvent.click(screen.getByRole('button', { name: /login/i }))

    await waitFor(() => {
      expect(mockedLogin).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      })
      expect(toast.success).toHaveBeenCalledWith('Login successful')
    })
  })

  test('shows error toast on invalid credentials', async () => {
    const mockedLogin = authApi.login as unknown as ReturnType<typeof vi.fn>
    mockedLogin.mockRejectedValueOnce(new Error('Invalid email or password'))

    renderWithProviders()

    await userEvent.type(screen.getByLabelText(/email/i), 'fail@example.com')
    await userEvent.type(screen.getByLabelText(/password/i), 'wrongpassword')

    await userEvent.click(screen.getByRole('button', { name: /login/i }))

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Invalid email or password')
    })
  })

  test('submit button is disabled during submission', async () => {
    const mockedLogin = authApi.login as unknown as ReturnType<typeof vi.fn>
    mockedLogin.mockImplementation(() => new Promise((res) => setTimeout(() => res({ email: 'test@example.com' }), 300)))

    renderWithProviders()
    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com')
    await userEvent.type(screen.getByLabelText(/password/i), 'password123')

    await userEvent.click(screen.getByRole('button', { name: /login/i }))

    expect(screen.getByRole('button', { name: /login/i })).toHaveAttribute('aria-busy', 'true')
  })
})
