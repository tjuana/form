import { renderHook, act } from '@testing-library/react'
import { useLoginFields } from '../useLoginFields'

describe('useLoginFields', () => {
  test('updates values and triggers validation', () => {
    const { result } = renderHook(() => useLoginFields())

    // simulate typing
    act(() => result.current.handleChange('email')('not-an-email'))
    act(() => result.current.onBlurs.email())

    expect(result.current.errors.email).toBe('Invalid email format')

    act(() => result.current.handleChange('password')('123'))
    act(() => result.current.onBlurs.password())

    expect(result.current.errors.password).toBe('Password must be at least 8 characters')
  })
})