export const color = {
  color: {
    primary: {
      backgroundColor: '$primary',
    },
    secondary: {
      backgroundColor: '$secondary',
    },
    none: {
      backgroundColor: 'inherit',
    },
  },
}

export interface Chromatic {
  color?: 'primary' | 'secondary' | 'none'
}
