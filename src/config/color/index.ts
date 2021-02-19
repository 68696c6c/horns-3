import _merge from 'lodash.merge'

import { DeepPartial } from '../utils'
import {
  Mode,
  Config,
  defaultConfig,
  makePallet,
  Colorways,
  makeColorways,
  Backgrounds,
  makeBackgrounds,
} from './types'

export { Colorway, Background } from './types'

export class ColorConfig {
  public readonly isDarkMode: boolean
  public readonly config: Config
  public readonly colorways: Colorways
  public readonly backgrounds: Backgrounds

  constructor(config?: DeepPartial<Config>) {
    this.config = _merge(defaultConfig, config)
    this.isDarkMode = this.config.mode == Mode.Dark

    const pallet = makePallet(this.config)
    this.colorways = makeColorways(pallet, this.config)
    this.backgrounds = makeBackgrounds(pallet, this.config)
  }
}
