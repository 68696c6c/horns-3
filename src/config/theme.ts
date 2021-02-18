import { ReactNode } from 'react'
import _merge from 'lodash.merge'

import { ColorConfig } from './color'
import { defaultSize, SizeConfig } from './size'

export interface Styled {
  theme: Theme
}

export interface HasChildren {
  children: ReactNode
}

export class Theme {
  name: string
  color: ColorConfig
  size: SizeConfig

  constructor(themeConfig: Record<string, unknown> | undefined) {
    const config = typeof themeConfig !== 'undefined' ? themeConfig : {}

    this.name = typeof config.name === 'string' ? config.name : 'horns-theme'

    this.color = new ColorConfig(config.color as Record<string, unknown>)
    this.size = _merge(config.size, defaultSize)
  }
}
