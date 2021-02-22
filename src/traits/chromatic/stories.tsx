import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Colorway, HasChildren, Styled } from '../../config'
import { chromatic, Chromatic } from '.'

interface ChromaticDemoProps extends Styled, HasChildren, Chromatic {
  children: React.ReactNode
}

const ChromaticDemo = styled.div<ChromaticDemoProps>(({ theme, color }) =>
  chromatic(theme, color),
)

export default {
  title: 'Traits/Chromatic',
  component: ChromaticDemo,
} as Meta

const Template: Story<ChromaticDemoProps> = (props) => (
  <>
    <ChromaticDemo {...props} color={Colorway.Primary}>
      Primary
    </ChromaticDemo>
    <ChromaticDemo {...props} color={Colorway.Secondary}>
      Secondary
    </ChromaticDemo>
    <ChromaticDemo {...props} color={Colorway.Tertiary}>
      Tertiary
    </ChromaticDemo>
    <ChromaticDemo {...props} color={Colorway.Dark}>
      Dark
    </ChromaticDemo>
    <ChromaticDemo {...props} color={Colorway.Neutral}>
      Neutral
    </ChromaticDemo>
    <ChromaticDemo {...props} color={Colorway.Light}>
      Light
    </ChromaticDemo>
    <ChromaticDemo {...props} color={Colorway.Success}>
      Success
    </ChromaticDemo>
    <ChromaticDemo {...props} color={Colorway.Info}>
      Info
    </ChromaticDemo>
    <ChromaticDemo {...props} color={Colorway.Warning}>
      Warning
    </ChromaticDemo>
    <ChromaticDemo {...props} color={Colorway.Danger}>
      Danger
    </ChromaticDemo>
  </>
)

export const Default = Template.bind({})
