import { toast as toaster } from 'sonner'

export const toast = {
  success: (msg: string) => toaster.success(msg),
  error: (msg: string) => toaster.error(msg),
}