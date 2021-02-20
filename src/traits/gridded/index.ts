import { css, SerializedStyles } from '@emotion/react'

import { Theme, Size } from '../../config'

export interface Gridded {
  gapped?: boolean
  gap?: Size
}

export const gridded = (
  theme: Theme,
  gapped?: boolean,
  gap?: Size,
): SerializedStyles => {
  if (typeof gapped === 'undefined') {
    return css`
      display: grid;
    `
  }
  let gapValue = null
  if (gapped) {
    gapValue = gap ? theme.sizes[gap] : theme.grid.gap
  }
  return css`
    display: grid;
    grid-gap: ${gapValue};
  `
}
