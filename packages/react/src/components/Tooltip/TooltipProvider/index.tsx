import { Provider } from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'

interface TooltipProviderProps extends ComponentProps<typeof Provider> {}
export function TooltipProvider({
  children,
  ...providerProps
}: TooltipProviderProps) {
  return <Provider {...providerProps}>{children}</Provider>
}
