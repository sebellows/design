import {CSSObject} from 'styled-components'
import {_getResponsiveProp} from '..'
import {BoxShadow, ThemeShadow} from '../../theme'
import {_rem, _responsive} from '../helpers'
import {_ThemeProps} from '../types'
import {ResponsiveShadowStyleProps} from './types'

function toBoxShadow(shadow: BoxShadow, color: string) {
  return `${shadow.map(_rem).join(' ')} ${color}`
}

function shadowStyle(shadow: ThemeShadow | null): CSSObject {
  if (!shadow) return {}

  const outline = `0 0 0 ${_rem(1)} var(--card-shadow-outline-color)`
  const umbra = toBoxShadow(shadow.umbra, 'var(--card-shadow-umbra-color)')
  const penumbra = toBoxShadow(shadow.penumbra, 'var(--card-shadow-penumbra-color)')
  const ambient = toBoxShadow(shadow.ambient, 'var(--card-shadow-ambient-color)')

  return {boxShadow: `${outline}, ${umbra}, ${penumbra}, ${ambient}`}
}

export function responsiveShadowStyle(
  props: ResponsiveShadowStyleProps & _ThemeProps
): CSSObject[] {
  const {theme} = props
  const {media, shadows} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$shadow), (shadow) =>
    shadowStyle(shadows[shadow])
  )
}
