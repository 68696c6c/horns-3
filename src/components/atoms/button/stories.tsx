import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from '.'

export default {
  title: 'Example/Custom Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = ({ children, ...others }) => (
  <Button {...others}>{children}</Button>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Default',
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  children: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  children: 'Button',
}
