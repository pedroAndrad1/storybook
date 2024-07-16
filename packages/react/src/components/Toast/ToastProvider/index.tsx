import { Provider } from '@radix-ui/react-toast'
import { ComponentProps } from 'react'

interface ToastProviderProps extends ComponentProps<typeof Provider> {}

export function ToastProvider({
  children,
  label,
  swipeDirection,
  swipeThreshold,
}: ToastProviderProps) {
  return (
    <Provider
      label={label}
      swipeDirection={swipeDirection}
      swipeThreshold={swipeThreshold}
    >
      {children}
    </Provider>
  )
}
