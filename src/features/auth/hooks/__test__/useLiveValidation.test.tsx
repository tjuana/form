import { renderHook, act } from '@testing-library/react'
import { useLiveValidation, validateEmail } from '../useValidation'

describe('useLiveValidation', () => {
  test('returns no error initially if not touched', () => {
    const { result } = renderHook(() =>
      useLiveValidation('test', () => 'some error')
    )

    expect(result.current.error).toBeUndefined()
  })

  test('validates onBlur', () => {
    const { result } = renderHook(() =>
      useLiveValidation('', validateEmail)
    )

    act(() => {
      result.current.onBlur()
    })

    expect(result.current.error).toBe('Email is required')
  })

  test('validates on touched value change', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useLiveValidation(value, validateEmail),
      { initialProps: { value: '' } }
    )

    act(() => result.current.onBlur())

    rerender({ value: 'invalidemail' })

    expect(result.current.error).toBe('Invalid email format')
  })
})