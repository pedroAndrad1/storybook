import { Root, Trigger, Portal, Arrow } from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { Text } from '../Text'
import { StyledContent } from './styles'

export interface TooltipProps {
  rootProps?: ComponentProps<typeof Root>
  portalProps?: ComponentProps<typeof Portal>
  contentProps?: ComponentProps<typeof StyledContent>
  trigger: JSX.Element
  content: string
}

export const Tooltip = ({
  contentProps,
  portalProps,
  rootProps,
  trigger,
  content,
}: TooltipProps) => {
  return (
    <Root {...rootProps}>
      <Trigger asChild>{trigger}</Trigger>
      <Portal {...portalProps}>
        <StyledContent {...contentProps}>
          <Text>{content}</Text>
          <Arrow />
        </StyledContent>
      </Portal>
    </Root>
  )
}
