import {useContext} from 'react'
import {useTheme as useStyledTheme} from 'styled-components'
import {ThemeContext, ThemeContextValue} from './themeContext'

import {Theme} from './types'

/**
 * @public
 */
export function useTheme(): Theme {
  return useStyledTheme() as Theme
}

/**
 * @public
 */
export function useRootTheme(): ThemeContextValue {
  const rootTheme = useContext(ThemeContext)

  if (!rootTheme) {
    throw new Error('useRootTheme(): missing context value')
  }

  return rootTheme
}
