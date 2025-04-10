import { render, screen } from '@testing-library/react'
import { Input } from '../Input'

test('renders input with label', () => {
  render(<Input id="email" label="Email" value="" onChange={() => {}} />)
  expect(screen.getByLabelText('Email')).toBeInTheDocument()
})