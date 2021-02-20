import { css, SerializedStyles } from '@emotion/react'

import { Theme, Colorway } from '../../config'

export interface Chromatic {
  color?: Colorway
}

export const chromatic = (theme: Theme, color?: Colorway): SerializedStyles => {
  const { base } = theme.colors.colorways[color || Colorway.Neutral]
  return css`
    border-color: ${base.border};
    background-color: ${base.base};
    color: ${base.readable};
  `
}
