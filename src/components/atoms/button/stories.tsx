import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { BorderStyle, Colorway, Size } from '../../../config'
import { chromaticDemo } from '../../../traits/chromatic/demo'
import { paddedDemo } from '../../../traits/padded/demo'
import { ButtonProps } from '../utils'
import { Button } from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = ({ children, ...others }: ButtonProps) => (
  <Button {...others}>{children}</Button>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Default',
}

export const Colorways = (props: React.PropsWithoutRef<ButtonProps>) =>
  chromaticDemo(Button, props)

export const Padding = (props: React.PropsWithoutRef<ButtonProps>) =>
  paddedDemo(Button, props)

export const Mega = Template.bind({})
Mega.args = {
  color: Colorway.Tertiary,
  children: 'Mega',
  padding: Size.Giant,
}

export const Bordered = Template.bind({})
Bordered.args = {
  color: Colorway.Primary,
  children: 'Bordered',
  border: { width: Size.Small, style: BorderStyle.Groove },
}

export const SingleBordered = Template.bind({})
SingleBordered.args = {
  color: Colorway.Secondary,
  children: 'Bottom Bordered',
  border: { bottom: { width: Size.Small, style: BorderStyle.Dotted } },
}
