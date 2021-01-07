import {CSSObject} from 'styled-components'
import {_getResponsiveProp, _responsive} from '../helpers'
import {_ThemeProps} from '../types'
import {ResponsiveFlexItemStyleProps} from './types'

export function flexItemStyle(): ((
  props: ResponsiveFlexItemStyleProps & _ThemeProps
) => CSSObject[])[] {
  return [() => [{minWidth: 0, minHeight: 0}], responsiveFlexItemStyle]
}

export function responsiveFlexItemStyle(
  props: ResponsiveFlexItemStyleProps & _ThemeProps
): CSSObject[] {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$flex), (flex) => ({flex}))
}
