import { Breakpoints, defaultConfig } from '.'

describe('Breakpoints', () => {
  it('should use default values if no config is provided', () => {
    const result = new Breakpoints()
    expect(result).toEqual({
      ...defaultConfig,
      mobile: defaultConfig.small,
    })
  })

  it('should use default values if an empty config is provided', () => {
    const result = new Breakpoints({})
    expect(result).toEqual({
      ...defaultConfig,
      mobile: defaultConfig.small,
    })
  })

  it('should merge provided config values with defaults', () => {
    const result = new Breakpoints({
      small: '500px',
    })
    expect(result).toEqual({
      mobile: '500px',
      min: '320px',
      small: '500px',
      medium: '768px',
      large: '992px',
      max: '1200px',
    })
  })

  it('should set the mobile breakpoint correctly', () => {
    const result = new Breakpoints({
      mobile: 'large',
      large: '800px',
    })
    expect(result).toEqual({
      mobile: '800px',
      min: '320px',
      small: '500px',
      medium: '768px',
      large: '800px',
      max: '1200px',
    })
  })
})
