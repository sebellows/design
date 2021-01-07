import {CSSObject} from 'styled-components'
import {_getResponsiveProp, _rem, _responsive} from '../helpers'
import {_ThemeProps} from '../types'
import {ResponsiveRadiusStyleProps} from './types'

export function responsiveRadiusStyle(
  props: ResponsiveRadiusStyleProps & _ThemeProps
): CSSObject[] {
  const {theme} = props
  const {media, radius} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$radius), (radiusIndex) => ({
    borderRadius: _rem(radius[radiusIndex]),
  }))
}
