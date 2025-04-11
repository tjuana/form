import { users, MockUser } from './users'

export type LoginPayload = {
  email: string
  password: string
}

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const login = async ({ email, password }: LoginPayload): Promise<MockUser> => {
  await delay(713)

  const user = users.find(
    (u) => u.email === email && u.password === password
  )

  if (!user) {
    throw new Error('Invalid email or password, use /?demo=0 or /?demo=1 or /?demo=2 to login as Test User, Test User 2 or Admin User')
  }

  return user
}