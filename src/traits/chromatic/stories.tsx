import React from 'react'
import styled from '@emotion/styled'
import { Meta } from '@storybook/react/types-6-0'

import { chromaticDemo } from '../../_story'
import { Styled, Component } from '../styled'

import { chromatic, Chromatic } from '.'

interface ChromaticDemoProps extends Styled, Component, Chromatic {}

const ChromaticDemo = styled.div<ChromaticDemoProps>(({ theme, color }) =>
  chromatic(theme, color),
)

export default {
  title: 'Traits/Chromatic',
  component: ChromaticDemo,
} as Meta

export const Colorways = (props: React.PropsWithoutRef<ChromaticDemoProps>) =>
  chromaticDemo(ChromaticDemo, props)
