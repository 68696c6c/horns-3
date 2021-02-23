import styled from '@emotion/styled'

import {
  Styled,
  Component,
  Bordered,
  bordered,
  Chromatic,
  chromatic,
  Padded,
  padded,
} from '../../../traits'

export interface ButtonProps
  extends Styled,
    Component,
    Bordered,
    Chromatic,
    Padded {}

export interface BaseLinkProps extends ButtonProps {
  variant?: 'link' | 'button'
}

export const Link = styled.a<BaseLinkProps>``

export const LinkButton = styled.a<ButtonProps>(
  ({ theme, border, color, padding }) => [
    chromatic(theme, color),
    bordered(theme, border, theme.buttons.border),
    padded(theme, padding, theme.buttons.padding),
  ],
)

// type LinkVariantProps = {
//   Tag:
// }
//
// export const getLinkVariantProps = (variant: string): LinkVariantProps => {
//   if (variant === 'button') {
//     return {
//       Tag: LinkButton,
//     }
//   }
//   return {
//     Tag: Link,
//   }
// }
