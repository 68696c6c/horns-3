import { Config } from './config'
import { Variant } from './path'
import {
  Pallet,
  ColorStates,
  makeColorway,
  makeLightColorway,
  makeDarkColorway,
} from './pallet'

export type Backgrounds = {
  [key in Variant]: ColorStates
}

export const makeBackgrounds = (
  pallet: Pallet,
  config: Config,
): Backgrounds => {
  const isDark = config.mode == 'dark'
  if (isDark) {
    return {
      primary: makeDarkColorway(pallet.dark),
      secondary: makeColorway(pallet.neutral, true),
    }
  }
  return {
    primary: makeLightColorway(pallet.light),
    secondary: makeColorway(pallet.neutral, false),
  }
}
