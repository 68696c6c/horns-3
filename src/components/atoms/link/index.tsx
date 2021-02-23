import React, { FC } from 'react'

import { BaseLinkProps, LinkButton, Link as StyledLink } from '../utils'

export interface LinkProps extends BaseLinkProps {
  href: string
}

export const Link: FC<LinkProps> = ({
  children,
  variant,
  href,
  ...others
}: LinkProps) => {
  const Tag = variant === 'button' ? LinkButton : StyledLink
  return (
    <Tag {...others} href={href}>
      {children}
    </Tag>
  )
}
