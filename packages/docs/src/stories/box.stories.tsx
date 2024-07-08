import { Box, BoxProps, Text } from '@pedroandrad1/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text style={{ color: '#FFF' }}>Conteúdo</Text>
      </>
    ),
  },
  argTypes: { children: { control: { disable: true } } },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
