import { defaultConfig } from './config'
import { Colorway, State, Swatch } from './path'
import { makePallet } from './pallet'

import { makeColorways } from './colorways'

describe('makeColorways', () => {
  const sorted = {
    colors: Object.values(Colorway).sort(),
    states: Object.values(State).sort(),
    swatches: Object.values(Swatch).sort(),
  }

  it('should return a colorway for each pallet color', () => {
    const pallet = makePallet(defaultConfig)
    const result = makeColorways(pallet, defaultConfig)

    const colorways = Object.keys(result).sort()
    expect(colorways).toEqual(sorted.colors)
  })

  it('should return an object of states for each colorway', () => {
    const pallet = makePallet(defaultConfig)
    const result = makeColorways(pallet, defaultConfig)

    Object.values(Colorway).forEach((i) => {
      const states = Object.keys(result[i]).sort()
      expect(states).toEqual(sorted.states)
    })
  })

  it('should return an object of swatches for each colorway state', () => {
    const pallet = makePallet(defaultConfig)
    const result = makeColorways(pallet, defaultConfig)

    Object.values(Colorway).forEach((i) => {
      Object.values(State).forEach((j) => {
        const swatches = Object.keys(result[i][j]).sort()
        expect(swatches).toEqual(sorted.swatches)
      })
    })
  })
})
