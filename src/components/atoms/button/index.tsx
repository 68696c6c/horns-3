import React from 'react'

import { styled } from '../../../config/stitches.config'
import { color, Chromatic } from '../../../traits'

export const Button = styled('button', {
  variants: {
    ...color,
  },
})

export interface ButtonProps extends Chromatic {
  children: React.ReactNode
}
