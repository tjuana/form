import { Button } from "./Button"

type UserCardProps = {
  name: string
  email: string
  onLogout: () => void
}

export const UserCard = ({ name, email, onLogout }: UserCardProps) => {
  return (
    <div className="max-w-sm md:max-w-md mx-auto mt-20 p-6 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col items-center gap-4 text-center">
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
        {name.charAt(0).toUpperCase()}
      </div>
      <h1 className="text-xl font-semibold">{name}</h1>
      <p className="text-sm text-gray-600">{email}</p>
      <p className="text-sm text-gray-400">Click below to logout</p>
      <Button onClick={onLogout} className="w-24">
        Logout
      </Button>
    </div>
  )
}