export type MockUser = {
  email: string
  password: string
  name: string
}

export const users: MockUser[] = [
  { email: 'test@example.com', password: 'StrongPass1!', name: 'Test User' },
  { email: 'test2@example.com', password: 'StrongPass2!', name: 'Test User 2' },
  { email: 'admin@example.com', password: 'StrongPass3!', name: 'Admin User' },
]