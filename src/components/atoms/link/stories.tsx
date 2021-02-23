import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Link, LinkProps } from '.'

export default {
  title: 'Atoms/Link',
  component: Link,
} as Meta

const Template: Story<LinkProps> = ({ children, ...others }: LinkProps) => (
  <Link {...others}>{children}</Link>
)

export const Default = Template.bind({})
Default.args = {
  href: '#',
  children: 'Default',
}

export const Button = Template.bind({})
Button.args = {
  href: '#',
  variant: 'button',
  children: 'Button',
}
