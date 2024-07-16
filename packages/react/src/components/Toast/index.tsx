import { Close, Title, Description } from '@radix-ui/react-toast'
import { ComponentProps } from 'react'
import {
  CloseButton,
  StyledDescription,
  StyledRoot,
  StyledTitle,
  StyledViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof StyledRoot> {
  title: string
  description: string
}

export const Toast = ({
  title,
  description,
  duration,
  ...rootProps
}: ToastProps) => {
  return (
    <>
      <StyledRoot {...rootProps} duration={duration}>
        <Title asChild>
          <StyledTitle size={'xl'}>{title}</StyledTitle>
        </Title>
        <Description asChild>
          <StyledDescription size={'sm'}>{description}</StyledDescription>
        </Description>
        <Close asChild>
          <CloseButton />
        </Close>
      </StyledRoot>
      <StyledViewport />
    </>
  )
}
