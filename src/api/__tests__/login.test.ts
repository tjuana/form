import { describe, expect, test, vi } from 'vitest'
import { login } from '../auth'
import { users } from '../users'

vi.useFakeTimers()

describe('login', () => {
  test('logs in with valid credentials', async () => {
    const validUser = users[0] // { email, password, name }

    const loginPromise = login({
      email: validUser.email,
      password: validUser.password,
    })

    vi.advanceTimersByTime(713)

    const result = await loginPromise

    expect(result).toEqual(validUser)
  })

  test('throws error with invalid credentials', async () => {
    const loginPromise = login({
      email: 'wrong@example.com',
      password: 'incorrect',
    })

    vi.advanceTimersByTime(713)

    await expect(loginPromise).rejects.toThrow('Invalid email or password')
  })
})