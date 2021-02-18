/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ThemeProvider } from '@storybook/theming'

import { Theme } from '../src/config/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={new Theme()}>
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
