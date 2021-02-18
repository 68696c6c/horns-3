import styled from '@emotion/styled'

import { Styled, HasChildren } from '../../../config'
import { Chromatic, chromatic, Padded, padded } from '../../../traits'

export interface ButtonProps extends Styled, HasChildren, Chromatic, Padded {}

export const Button = styled.button<ButtonProps>(
  ({ theme, color, padding }) => [
    chromatic(theme, color),
    padded(theme, padding, { x: 'medium', y: 'small' }),
  ],
)
