import {
  Colorway,
  Variant,
  State,
  Swatch,
  stringToBackgroundPath,
  stringToColorwayPath,
} from './path'

describe('stringToBackgroundPath', () => {
  it('should default to primary when no colorway is provided', () => {
    const result = stringToBackgroundPath('')
    expect(result).toEqual({
      color: Variant.Primary,
      state: State.Base,
      swatch: Swatch.Base,
    })
  })

  it('should default to primary when an invalid colorway is provided', () => {
    const result = stringToBackgroundPath('asdf')
    expect(result).toEqual({
      color: Variant.Primary,
      state: State.Base,
      swatch: Swatch.Base,
    })
  })

  it('should default to base values when a colorway is specified', () => {
    const result = stringToBackgroundPath('secondary')
    expect(result).toEqual({
      color: Variant.Secondary,
      state: State.Base,
      swatch: Swatch.Base,
    })
  })

  it('should default to base values when a colorway and state are specified', () => {
    const result = stringToBackgroundPath('secondary.hover')
    expect(result).toEqual({
      color: Variant.Secondary,
      state: State.Hover,
      swatch: Swatch.Base,
    })
  })

  it('should default to base values when a colorway, state, and swatch are specified', () => {
    const result = stringToBackgroundPath('primary.active.readable')
    expect(result).toEqual({
      color: Variant.Primary,
      state: State.Active,
      swatch: Swatch.Readable,
    })
  })
})

describe('stringToColorwayPath', () => {
  it('should default to neutral when no colorway is provided', () => {
    const result = stringToColorwayPath('')
    expect(result).toEqual({
      color: Colorway.Neutral,
      state: State.Base,
      swatch: Swatch.Base,
    })
  })

  it('should default to neutral when an invalid colorway is provided', () => {
    const result = stringToColorwayPath('asdf')
    expect(result).toEqual({
      color: Colorway.Neutral,
      state: State.Base,
      swatch: Swatch.Base,
    })
  })

  it('should default to base values when a colorway is specified', () => {
    const result = stringToColorwayPath('dark')
    expect(result).toEqual({
      color: Colorway.Dark,
      state: State.Base,
      swatch: Swatch.Base,
    })
  })

  it('should default to base values when a colorway and state are specified', () => {
    const result = stringToColorwayPath('secondary.hover')
    expect(result).toEqual({
      color: Colorway.Secondary,
      state: State.Hover,
      swatch: Swatch.Base,
    })
  })

  it('should default to base values when a colorway, state, and swatch are specified', () => {
    const result = stringToColorwayPath('tertiary.active.readable')
    expect(result).toEqual({
      color: Colorway.Tertiary,
      state: State.Active,
      swatch: Swatch.Readable,
    })
  })
})
