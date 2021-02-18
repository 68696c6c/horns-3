import { defaultConfig } from './config'
import { Variant, State, Swatch } from './path'
import { makePallet } from './pallet'

import { makeBackgrounds } from './backgrounds'

describe('makeBackgrounds', () => {
  const sorted = {
    colors: Object.values(Variant).sort(),
    states: Object.values(State).sort(),
    swatches: Object.values(Swatch).sort(),
  }

  it('should return a colorway for each background variant', () => {
    const pallet = makePallet(defaultConfig)
    const result = makeBackgrounds(pallet, defaultConfig)

    const colorways = Object.keys(result).sort()
    expect(colorways).toEqual(sorted.colors)
  })

  it('should return an object of states for each colorway', () => {
    const pallet = makePallet(defaultConfig)
    const result = makeBackgrounds(pallet, defaultConfig)

    Object.values(Variant).forEach((i) => {
      const states = Object.keys(result[i]).sort()
      expect(states).toEqual(sorted.states)
    })
  })

  it('should return an object of swatches for each colorway state', () => {
    const pallet = makePallet(defaultConfig)
    const result = makeBackgrounds(pallet, defaultConfig)

    Object.values(Variant).forEach((i) => {
      Object.values(State).forEach((j) => {
        const swatches = Object.keys(result[i][j]).sort()
        expect(swatches).toEqual(sorted.swatches)
      })
    })
  })
})
