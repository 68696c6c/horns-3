import React from 'react'

import { render, screen } from '@testing-library/react'

import { Button } from '.'

describe('Button', () => {
  it('should render as default', () => {
    const { container } = render(<Button>example</Button>)
    expect(container).toMatchSnapshot()
  })
})
