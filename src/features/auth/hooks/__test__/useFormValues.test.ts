import { renderHook, act } from '@testing-library/react'
import { useFormValues } from '../useFormValues'

describe('useFormValues', () => {
  test('initializes with given values', () => {
    const { result } = renderHook(() =>
      useFormValues({ email: '', password: '' })
    )

    expect(result.current.values).toEqual({ email: '', password: '' })
  })

  test('handleChange updates value by key', () => {
    const { result } = renderHook(() =>
      useFormValues({ email: '', password: '' })
    )

    act(() => {
      result.current.handleChange('email')('hello@test.com')
    })

    expect(result.current.values.email).toBe('hello@test.com')
  })

  test('setValue updates value directly', () => {
    const { result } = renderHook(() =>
      useFormValues({ email: '', password: '' })
    )

    act(() => {
      result.current.setValue('password', 'SuperPass!')
    })

    expect(result.current.values.password).toBe('SuperPass!')
  })
})