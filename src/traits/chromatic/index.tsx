import { css, SerializedStyles } from '@emotion/react'

import { Theme, Colorway } from '../../config'

export interface Chromatic {
  color?: Colorway
}

export const chromatic = (
  theme: Theme,
  color: Colorway | undefined,
): SerializedStyles => {
  const { base } = theme.color.getColorway(color)
  return css`
    border-color: ${base.border};
    background-color: ${base.base};
    color: ${base.readable};
  `
}
