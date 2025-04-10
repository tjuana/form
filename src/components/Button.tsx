import React from 'react'
import clsx from 'clsx'

type ButtonProps = {
  children: React.ReactNode
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  ariaLabel?: string
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
  ariaLabel,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        'px-4 py-2 rounded-md text-white text-sm font-medium transition-all duration-150',
        'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        fullWidth && 'w-full',
        className
      )}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      aria-label={ariaLabel}
      aria-live="polite"
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}