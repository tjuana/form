export type LoginPayload = {
  email: string
  password: string
}

export class AuthError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AuthError'
  }
}

export const login = async ({ email, password }: LoginPayload): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password123') {
        resolve()
      } else {
        reject(new AuthError('Invalid email or password'))
      }
    }, 1000)
  })
}