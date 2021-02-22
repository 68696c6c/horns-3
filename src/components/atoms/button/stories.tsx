import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Colorway, Size } from '../../../config'
import { Button, ButtonProps } from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta

// eslint-disable-next-line react/prop-types
const Template: Story<ButtonProps> = ({ children, ...others }) => (
  <Button {...others}>{children}</Button>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Default',
}

export const Primary = Template.bind({})
Primary.args = {
  color: Colorway.Primary,
  children: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: Colorway.Secondary,
  children: 'Secondary',
}

export const Mega = Template.bind({})
Mega.args = {
  color: Colorway.Tertiary,
  children: 'Mega',
  padding: Size.Giant,
}
