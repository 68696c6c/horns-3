import { Config } from './config'
import { Colorway } from './path'
import {
  Pallet,
  ColorStates,
  makeColorway,
  makeLightColorway,
  makeDarkColorway,
} from './pallet'

export type Colorways = {
  [key in Colorway]: ColorStates
}

export const makeColorways = (pallet: Pallet, config: Config): Colorways => {
  const isDark = config.mode == 'dark'
  const primary = makeColorway(pallet.primary, isDark)
  const secondary = makeColorway(pallet.secondary, isDark)
  const tertiary = makeColorway(pallet.tertiary, isDark)
  let prominent
  switch (config.prominent) {
    default:
      prominent = primary
      break
    case 'secondary':
      prominent = secondary
      break
    case 'tertiary':
      prominent = tertiary
      break
  }
  return {
    primary,
    secondary,
    tertiary,
    dark: makeDarkColorway(pallet.dark),
    neutral: makeColorway(pallet.neutral, isDark),
    light: makeLightColorway(pallet.light),
    success: makeColorway(pallet.success, isDark),
    info: makeColorway(pallet.info, isDark),
    warning: makeColorway(pallet.warning, isDark),
    danger: makeColorway(pallet.danger, isDark),
    prominent,
  }
}
