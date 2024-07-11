import { Tooltip, TooltipProps, Button } from '@pedroandrad1/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    trigger: <Button css={{ marginTop: '20vh' }}>Passe o mouse em aqui</Button>,
    content: 'Sou um tooltip',
  },
  argTypes: { trigger: { control: { disable: true } } },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
