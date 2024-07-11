import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@pedroandrad1/react'
import { useState } from 'react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  args: {
    title: 'Título',
    description: 'Descrição',
    duration: 3000,
  },
  decorators: [
    (Story, context) => {
      const [open, setOpen] = useState(false)
      return (
        <>
          <Button onClick={() => setOpen(!open)}>Clique aqui</Button>
          {Story({ args: { open, onOpenChange: setOpen, ...context.args } })}
        </>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
