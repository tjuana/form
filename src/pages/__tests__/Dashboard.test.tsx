import { describe, test, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Dashboard from '../Dashboard'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@store/authSlice'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import * as toastLib from '@lib/toast'

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom')
  return {
    ...actual,
    useNavigate: vi.fn(),
  }
})

vi.mock('../../lib/toast', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}))

const mockNavigate = vi.fn()

beforeEach(() => {
  vi.clearAllMocks()
  ;(useNavigate as unknown as ReturnType<typeof vi.fn>).mockReturnValue(mockNavigate)
})

const renderWithStore = (preloadedUser: any) => {
  const store = configureStore({
    reducer: {
      auth: authReducer,
    },
    preloadedState: {
      auth: { user: preloadedUser },
    },
  })

  return render(
    <MemoryRouter>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </MemoryRouter>
  )
}

describe('Dashboard', () => {
  test('logs out and redirects on logout click', async () => {
    const user = userEvent.setup()
  
    renderWithStore({ name: 'Test User', email: 'test@example.com' })
  
    // Проверяем, что до клика всё отображается
    expect(screen.getByRole('heading', { name: /test user/i })).toBeInTheDocument()
    expect(screen.getByText(/test@example.com/i)).toBeInTheDocument()
  
    const button = screen.getByRole('button', { name: /logout/i })
  
    await user.click(button)
  
    // Проверяем сайд-эффекты
    expect(toastLib.toast.success).toHaveBeenCalledWith('Logged out successfully')
    expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true })
  })
})