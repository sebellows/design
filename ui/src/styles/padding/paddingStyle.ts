import {CSSObject} from 'styled-components'
import {_getResponsiveProp, _getResponsiveSpace} from '../helpers'
import {_ThemeProps} from '../types'
import {ResponsivePaddingStyleProps} from './types'

export function responsivePaddingStyle(
  props: ResponsivePaddingStyleProps & _ThemeProps
): CSSObject[][] {
  const {theme} = props

  return [
    _getResponsiveSpace(theme, ['padding'], _getResponsiveProp(props.$padding)),
    _getResponsiveSpace(
      theme,
      ['paddingLeft', 'paddingRight'],
      _getResponsiveProp(props.$paddingX)
    ),
    _getResponsiveSpace(
      theme,
      ['paddingTop', 'paddingBottom'],
      _getResponsiveProp(props.$paddingY)
    ),
    _getResponsiveSpace(theme, ['paddingTop'], _getResponsiveProp(props.$paddingTop)),
    _getResponsiveSpace(theme, ['paddingRight'], _getResponsiveProp(props.$paddingRight)),
    _getResponsiveSpace(theme, ['paddingBottom'], _getResponsiveProp(props.$paddingBottom)),
    _getResponsiveSpace(theme, ['paddingLeft'], _getResponsiveProp(props.$paddingLeft)),
  ].filter(Boolean)
}
