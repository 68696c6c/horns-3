export enum Colorway {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Dark = 'dark',
  Neutral = 'neutral',
  Light = 'light',
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Danger = 'danger',
  Prominent = 'prominent',
}

export const stringToColorway = (input: string): Colorway | undefined => {
  switch (input) {
    case 'primary':
      return Colorway.Primary
    case 'secondary':
      return Colorway.Secondary
    case 'tertiary':
      return Colorway.Tertiary
    case 'dark':
      return Colorway.Dark
    case 'neutral':
      return Colorway.Neutral
    case 'light':
      return Colorway.Light
    case 'success':
      return Colorway.Success
    case 'info':
      return Colorway.Info
    case 'warning':
      return Colorway.Warning
    case 'danger':
      return Colorway.Danger
    case 'prominent':
      return Colorway.Prominent
    default:
      return
  }
}

export enum Variant {
  Primary = 'primary',
  Secondary = 'secondary',
}

export const stringToVariant = (input: string): Variant | undefined => {
  switch (input) {
    case 'primary':
      return Variant.Primary
    case 'secondary':
      return Variant.Secondary
    default:
      return
  }
}

export enum State {
  Base = 'base',
  Hover = 'hover',
  Active = 'active',
  Inactive = 'inactive',
}

export const stringToState = (input: string): State | undefined => {
  switch (input) {
    case 'base':
      return State.Base
    case 'hover':
      return State.Hover
    case 'active':
      return State.Active
    case 'inactive':
      return State.Inactive
    default:
      return
  }
}

export enum Swatch {
  Base = 'base',
  Readable = 'readable',
  Border = 'border',
}

export const stringToSwatch = (input: string): Swatch | undefined => {
  switch (input) {
    case 'base':
      return Swatch.Base
    case 'readable':
      return Swatch.Readable
    case 'border':
      return Swatch.Border
    default:
      return
  }
}

export type BackgroundPath = {
  color: Variant
  state: State
  swatch: Swatch
}

export const stringToBackgroundPath = (input: string): BackgroundPath => {
  const parts = input.split('.')
  return {
    color: stringToVariant(parts[0]) || Variant.Primary,
    state: stringToState(parts[1]) || State.Base,
    swatch: stringToSwatch(parts[2]) || Swatch.Base,
  }
}

export type ColorwayPath = {
  color: Colorway
  state: State
  swatch: Swatch
}

export const stringToColorwayPath = (input: string): ColorwayPath => {
  const parts = input.split('.')
  return {
    color: stringToColorway(parts[0]) || Colorway.Neutral,
    state: stringToState(parts[1]) || State.Base,
    swatch: stringToSwatch(parts[2]) || Swatch.Base,
  }
}
