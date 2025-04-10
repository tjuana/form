export type MockUser = {
  email: string
  password: string
  name: string
}

export const users: MockUser[] = [
  { email: 'test@example.com', password: 'password123', name: 'Test User' },
  { email: 'test2@example.com', password: 'password123', name: 'Test User 2' },
  { email: 'admin@example.com', password: 'admin123', name: 'Admin User' },
]