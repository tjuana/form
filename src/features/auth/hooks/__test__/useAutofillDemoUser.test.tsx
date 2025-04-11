import { renderHook } from '@testing-library/react'
import { useAutofillDemoUser } from '../useAutofillDemoUser'
import { users } from '@api/users'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

// Мокаем toast
vi.mock('@lib/toast', () => ({
  toast: {
    error: vi.fn(),
  },
}))

// Обёртка с MemoryRouter и нужными query-параметрами
const wrapperWithDemoParam = (demo: string) =>
  ({ children }: { children: React.ReactNode }) => (
    <MemoryRouter initialEntries={[`/?demo=${demo}`]}>{children}</MemoryRouter>
  )

describe('useAutofillDemoUser', () => {
  it('sets values from demo user if demo param is valid and fields are empty', () => {
    const setValue = vi.fn()
    const values = { email: '', password: '' }

    renderHook(() => useAutofillDemoUser({ values, setValue }), {
      wrapper: wrapperWithDemoParam('1'),
    })

    const user = users[1]

    expect(setValue).toHaveBeenCalledWith('email', user.email)
    expect(setValue).toHaveBeenCalledWith('password', user.password)
  })

  it('does not call setValue if email or password already filled', () => {
    const setValue = vi.fn()
    const values = { email: 'filled', password: '' }

    renderHook(() => useAutofillDemoUser({ values, setValue }), {
      wrapper: wrapperWithDemoParam('0'),
    })

    expect(setValue).not.toHaveBeenCalled()
  })

  it('shows toast if demo param is invalid', async () => {
    const { toast } = await import('@lib/toast')
    const setValue = vi.fn()
    const values = { email: '', password: '' }

    renderHook(() => useAutofillDemoUser({ values, setValue }), {
      wrapper: wrapperWithDemoParam('999'),
    })

    expect(toast.error).toHaveBeenCalled()
    expect(setValue).not.toHaveBeenCalled()
  })
})
