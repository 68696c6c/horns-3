import React, { Fragment } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Breakpoint, Size } from '../../../config'
import { Stack, StackProps } from '.'

export default {
  title: 'Atoms/Stack',
  component: Stack,
} as Meta

const Template: Story<StackProps> = ({ breakpoint, children, ...others }) => (
  <Fragment>
    <p>Above the {breakpoint} breakpoint, these items will stack.</p>
    <Stack {...others}>{children}</Stack>
  </Fragment>
)

export const Default = Template.bind({})
Default.args = {
  breakpoint: Breakpoint.Mobile,
  children: (
    <Fragment>
      <div>one</div>
      <div>two</div>
      <div>three</div>
    </Fragment>
  ),
}

export const SingleItem = Template.bind({})
SingleItem.args = {
  breakpoint: Breakpoint.Mobile,
  children: <div>one</div>,
}
