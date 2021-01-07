import React from 'react'
import {useRootTheme} from './hooks'
import {ThemeColorName, ThemeColorSchemeKey} from './lib/theme'
import {ThemeProvider} from './themeProvider'

/**
 * @public
 */
export interface ThemeColorProviderProps {
  children?: React.ReactNode
  scheme?: ThemeColorSchemeKey
  tone?: ThemeColorName
}

/**
 * @public
 */
export function ThemeColorProvider(props: ThemeColorProviderProps): React.ReactElement {
  const {children, scheme, tone} = props
  const root = useRootTheme()

  return (
    <ThemeProvider scheme={scheme || root.scheme} theme={root.theme} tone={tone}>
      {children}
    </ThemeProvider>
  )
}
