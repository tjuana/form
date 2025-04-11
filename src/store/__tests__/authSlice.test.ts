import authReducer, { setUser, logout } from '../authSlice'
import { MockUser } from '@api/users'

const mockUser: MockUser = {
  name: 'Vlad',
  email: 'vlad@example.com',
  password: 'Secure123!',
}

describe('authSlice', () => {
  test('should return the initial state', () => {
    expect(authReducer(undefined, { type: 'unknown' })).toEqual({
      user: null,
    })
  })

  test('should handle setUser', () => {
    const nextState = authReducer(undefined, setUser(mockUser))
    expect(nextState.user).toEqual(mockUser)
  })

  test('should handle logout', () => {
    const prevState = { user: mockUser }
    const nextState = authReducer(prevState, logout())
    expect(nextState.user).toBeNull()
  })
})