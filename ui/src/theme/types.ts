import {CSSObject} from 'styled-components'
import {_BaseTheme, ThemeColor} from './lib/theme'

/**
 * @public
 */
export type RootTheme = _BaseTheme<_Styles>

/**
 * @internal
 */
export interface _Styles {
  button?: {
    root?: CSSObject
  }
  card?: {
    root?: CSSObject
  }
}

/**
 * @public
 */
export interface Theme {
  sanity: Omit<RootTheme, 'color'> & {
    color: ThemeColor
  }
}
