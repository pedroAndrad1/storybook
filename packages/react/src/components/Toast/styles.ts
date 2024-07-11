import { keyframes, styled } from '../../styles'
import { Root, Viewport } from '@radix-ui/react-toast'
import { Text } from '../Text'
import { X } from 'phosphor-react'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const StyledRoot = styled(Root, {
  borderRadius: '$sm',
  border: '1px solid $gray600',
  background: '$gray800',
  padding: '$3 $5',
  display: 'grid',
  gridTemplateColumns: '1fr 0.1fr',
  gridTemplateRows: '1fr 1fr',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const StyledTitle = styled(Text, {
  gridColumn: 1,
  gridrow: 1,
  color: '$white',
})

export const StyledDescription = styled(Text, {
  gridColumn: 1,
  gridrow: 2,
  color: '$gray200',
})

export const StyledViewport = styled(Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const CloseButton = styled(X, {
  color: '$white',
  width: '$5',
  height: '$5',
  cursor: 'pointer',
  gridRow: 1,
  gridColumn: 2,
})
