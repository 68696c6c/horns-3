import React, { FC } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Color from 'color'

import { defaultConfig } from './config'
import { PalletShades, makePallet } from './pallet'

interface ShadeProps {
  shade: Color
  name: string
}

const Shade: FC<ShadeProps> = ({ shade, name }) => (
  <div
    style={{
      backgroundColor: shade.rgb().string(),
      color: shade.isDark() ? 'white' : 'black',
      padding: '1em',
    }}
  >
    {name}
  </div>
)

interface ColorShadesProps {
  shades: Shades
  name: string
}

const ColorShades: FC<ColorShadesProps> = ({ shades, name }) => (
  <div>
    <Shade shade={shades.darker} name={`${name}.darker`} />
    <Shade shade={shades.dark} name={`${name}.dark`} />
    <Shade shade={shades.base} name={`${name}.base`} />
    <Shade shade={shades.light} name={`${name}.light`} />
    <Shade shade={shades.lighter} name={`${name}.lighter`} />
  </div>
)

interface PalletProps {
  variant: 'brand' | 'neutral' | 'action'
}

const Pallet: FC<PalletProps> = ({ variant }) => {
  const pallet = makePallet(defaultConfig)
  switch (variant) {
    case 'brand':
      return (
        <div>
          <ColorShades shades={pallet.primary} name="primary" />
          <ColorShades shades={pallet.secondary} name="secondary" />
          <ColorShades shades={pallet.tertiary} name="tertiary" />
        </div>
      )
    case 'neutral':
      return (
        <div>
          <ColorShades shades={pallet.dark} name="dark" />
          <ColorShades shades={pallet.neutral} name="neutral" />
          <ColorShades shades={pallet.light} name="light" />
        </div>
      )
    case 'action':
      return (
        <div>
          <ColorShades shades={pallet.success} name="success" />
          <ColorShades shades={pallet.info} name="info" />
          <ColorShades shades={pallet.warning} name="warning" />
          <ColorShades shades={pallet.danger} name="danger" />
        </div>
      )
  }
}

export default {
  title: 'Config/Pallet',
  component: Pallet,
} as Meta

const Template: Story<PalletProps> = ({ variant }) => (
  <Pallet variant={variant} />
)

export const Brand = Template.bind({})
Brand.args = {
  variant: 'brand',
}

export const Neutral = Template.bind({})
Neutral.args = {
  variant: 'neutral',
}

export const Action = Template.bind({})
Action.args = {
  variant: 'action',
}
