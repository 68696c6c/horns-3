import { createStyled } from '@stitches/react'

export const { styled, css } = createStyled({
  prefix: 'horns',
  tokens: {
    colors: {
      $primary: '#ffaa00',
      $secondary: '#1a99ff',
    },
  },
  breakpoints: {},
  utils: {},
})
