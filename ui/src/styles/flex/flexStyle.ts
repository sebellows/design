import {CSSObject} from 'styled-components'
import {_getResponsiveProp, _responsive} from '../helpers'
import {_ThemeProps} from '../types'
import {ResponsiveFlexStyleProps} from './types'

export function responsiveFlexStyle(): ((
  props: ResponsiveFlexStyleProps & _ThemeProps
) => CSSObject[])[] {
  return [
    flexBaseStyle,
    responsiveFlexAlignStyle,
    responsiveFlexWrapStyle,
    responsiveFlexJustifyStyle,
    responsiveFlexDirectionStyle,
  ]
}

function flexBaseStyle(): CSSObject[] {
  return [{'&:not([hidden])': {display: 'flex'}}]
}

export function responsiveFlexAlignStyle(
  props: ResponsiveFlexStyleProps & _ThemeProps
): CSSObject[] {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$align), (align) => {
    return {alignItems: align}
  })
}

export function responsiveFlexWrapStyle(
  props: ResponsiveFlexStyleProps & _ThemeProps
): CSSObject[] {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$wrap), (wrap) => {
    return {flexWrap: wrap}
  })
}

export function responsiveFlexJustifyStyle(
  props: ResponsiveFlexStyleProps & _ThemeProps
): CSSObject[] {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$justify), (justify) => {
    return {justifyContent: justify}
  })
}

export function responsiveFlexDirectionStyle(
  props: ResponsiveFlexStyleProps & _ThemeProps
): CSSObject[] {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$direction), (direction) => {
    return {flexDirection: direction}
  })
}
