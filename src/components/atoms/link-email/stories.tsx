import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Colorway } from '../../../config'
import { LinkEmail, LinkEmailProps } from '.'

export default {
  title: 'Atoms/LinkEmail',
  component: LinkEmail,
} as Meta

const Template: Story<LinkEmailProps> = ({
  children,
  ...others
}: LinkEmailProps) => <LinkEmail {...others}>{children}</LinkEmail>

export const Default = Template.bind({})
Default.args = {
  email: 'test@example.com',
  subject: 'Example subject',
  body: 'Example body.',
  children: 'Default',
}

export const Button = Template.bind({})
Button.args = {
  email: 'test@example.com',
  subject: 'Example subject',
  body: 'Example body.',
  variant: 'button',
  children: 'Button',
}

export const ButtonPrimary = Template.bind({})
ButtonPrimary.args = {
  color: Colorway.Primary,
  email: 'test@example.com',
  subject: 'Example subject',
  body: 'Example body.',
  variant: 'button',
  children: 'Button',
}
