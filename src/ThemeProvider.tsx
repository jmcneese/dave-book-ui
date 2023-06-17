import {
  MantineProvider,
  MantineThemeOverride
} from '@mantine/core'
import { ReactNode } from 'react'

export const theme: MantineThemeOverride = {
  colorScheme: 'light'
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider ({ children }: ThemeProviderProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light'
      }}
    >
      {children}
    </MantineProvider>
  )
}
