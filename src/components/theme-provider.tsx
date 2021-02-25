import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { Theme, Config } from '../config'

interface ThemeProviderProps {
  children: React.ReactNode
  theme: Partial<Config>
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
}: ThemeProviderProps) => (
  <EmotionThemeProvider theme={new Theme(theme)}>
    {children}
  </EmotionThemeProvider>
)

export default ThemeProvider
