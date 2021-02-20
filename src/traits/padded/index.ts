import _merge from 'lodash.merge'
import { css, SerializedStyles } from '@emotion/react'

import { Theme, Size } from '../../config'

export interface Padded {
  padding?: PaddingOptions | Size
}

export interface PaddingOptions {
  all?: string
  x?: string
  y?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
}

interface Sides {
  top: Size
  right: Size
  bottom: Size
  left: Size
}

const evalSides = (options: PaddingOptions = {}): Sides => {
  console.log(options)
  const { all, x, y, top, bottom, left, right } = options
  return {
    top: (top || y || all) as Size,
    right: (right || x || all) as Size,
    bottom: (bottom || y || all) as Size,
    left: (left || x || all) as Size,
  }
}

export const padded = (
  theme: Theme,
  padding?: PaddingOptions | string,
  defaults?: PaddingOptions,
): SerializedStyles => {
  if (typeof padding === 'string') {
    return css`
      padding: ${theme.sizes[padding as Size]};
    `
  }
  const sides = evalSides(_merge(padding, defaults) || {})
  return css`
    padding-top: ${theme.sizes[sides.top]};
    padding-right: ${theme.sizes[sides.right]};
    padding-bottom: ${theme.sizes[sides.bottom]};
    padding-left: ${theme.sizes[sides.left]};
  `
}
