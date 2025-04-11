import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { vi } from 'vitest'
import AppRoutes from '../Router'

vi.mock('../../pages/LoginForm', () => ({
  default: () => <div>Login Page</div>
}))

vi.mock('../../pages/Dashboard', () => ({
  default: () => <div>Dashboard Page</div>
}))

describe('AppRoutes', () => {
  test('renders login page on "/" route', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    )
    expect(await screen.findByText('Login Page')).toBeInTheDocument()
  })

  test('renders dashboard page on "/dashboard" route', async () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <AppRoutes />
      </MemoryRouter>
    )
    expect(await screen.findByText('Dashboard Page')).toBeInTheDocument()
  })
})