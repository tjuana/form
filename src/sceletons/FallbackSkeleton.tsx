const LoginFormSkeleton = () => {
  return (
    <div className="flex flex-col max-w-md mx-auto mt-20 p-4 border rounded-md shadow animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-1/2 mb-4" />
      <div className="h-10 bg-gray-200 rounded mb-4" />
      <div className="h-10 bg-gray-200 rounded mb-4" />
      <div className="h-10 bg-gray-300 rounded" />
    </div>
  )
}

export default LoginFormSkeleton