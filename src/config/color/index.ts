import _merge from 'lodash.merge'

import {
  defaultConfig,
  makePallet,
  ColorStates,
  Colorway,
  Colorways,
  makeColorways,
  stringToColorwayPath,
  Backgrounds,
  makeBackgrounds,
  stringToBackgroundPath,
} from './types'

export { Colorway } from './types'

export class ColorConfig {
  isDarkMode: boolean
  colorways: Colorways
  backgrounds: Backgrounds

  constructor(config: Record<string, unknown>) {
    const mergedConfig = _merge(config, defaultConfig)
    const pallet = makePallet(mergedConfig)

    this.isDarkMode = mergedConfig.mode == 'dark'
    this.colorways = makeColorways(pallet, mergedConfig)
    this.backgrounds = makeBackgrounds(pallet, mergedConfig)
  }

  getBackground(input: string): ColorStates {
    const path = stringToBackgroundPath(input)
    return this.backgrounds[path.color]
  }

  getColorway(input: string | undefined): ColorStates {
    const path = stringToColorwayPath(input || '')
    return this.colorways[path.color]
  }
}
