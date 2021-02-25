import React from 'react'
import styled from '@emotion/styled'

import { BorderStyle, Colorway, Size } from '../config'

const StyledDemo = styled.div``

const StyledDemoContent = styled.div`
  display: flex;
  grid-gap: 1em;
  flex-wrap: wrap;
  align-items: center;
`

interface DemoProps {
  children: React.ReactNode
}

const Demo: React.FC<DemoProps> = ({ children }: DemoProps) => (
  <StyledDemo>{children}</StyledDemo>
)

export const borderedDemo = <T extends {}>(
  C: React.ElementType,
  props: React.PropsWithoutRef<T>,
) => (
  <Demo>
    <h1>bordered</h1>
    <StyledDemoContent>
      <C {...props} border={undefined}>
        default
      </C>
      {Object.values(BorderStyle).map((style) => (
        <C
          {...props}
          border={{ all: { width: 'small', style } }}
          key={`border-${style}`}
        >
          {style}
        </C>
      ))}
    </StyledDemoContent>
  </Demo>
)

export const chromaticDemo = <T extends {}>(
  C: React.ElementType,
  props: React.PropsWithoutRef<T>,
) => (
  <Demo>
    <h1>chromatic</h1>
    <StyledDemoContent>
      <C {...props} color={undefined}>
        default
      </C>
      {Object.values(Colorway).map((color) => (
        <C {...props} color={color} key={`colorway-${color}`}>
          {color}
        </C>
      ))}
    </StyledDemoContent>
  </Demo>
)

export const paddedDemo = <T extends {}>(
  C: React.ElementType,
  props: React.PropsWithoutRef<T>,
) => (
  <Demo>
    <h1>padded</h1>
    <StyledDemoContent>
      <C {...props} padding={undefined}>
        default
      </C>
      {Object.values(Size).map((size) => (
        <C {...props} padding={size} key={`padding-${size}`}>
          {size}
        </C>
      ))}
    </StyledDemoContent>
  </Demo>
)

export const clickableButtonDemo = <T extends {}>(
  C: React.ElementType,
  props: React.PropsWithoutRef<T>,
) => (
  <>
    {borderedDemo(C, props)}
    {chromaticDemo(C, props)}
    {paddedDemo(C, props)}
  </>
)

export const clickableLinkDemo = <T extends {}>(
  C: React.ElementType,
  props: React.PropsWithoutRef<T>,
) => chromaticDemo(C, props)
