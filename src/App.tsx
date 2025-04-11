import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/Router"
import { Toaster } from "sonner"

export const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }} basename="/form">
      <Toaster position="bottom-center" richColors closeButton />
      <AppRoutes />
    </BrowserRouter>
  )
}