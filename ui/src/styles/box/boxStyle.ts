import {Property} from 'csstype'
import {CSSObject} from 'styled-components'
import {_getResponsiveProp, _responsive} from '../helpers'
import {_ThemeProps} from '../types'
import {ResponsiveBoxStyleProps} from './types'

const BOX_SIZING: {[key: string]: Property.BoxSizing} = {
  content: 'content-box',
  border: 'border-box',
}

const BOX_HEIGHT = {
  stretch: 'stretch',
  fill: '100%',
}

export function responsiveBoxStyle(): ((
  props: ResponsiveBoxStyleProps & _ThemeProps
) => CSSObject[])[] {
  return [
    responsiveBoxSizingStyle,
    responsiveBoxHeightStyle,
    responsiveBoxOverflowStyle,
    responsiveBoxDisplayStyle,
  ]
}

function responsiveBoxDisplayStyle(props: ResponsiveBoxStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$display), (display) => ({
    '&:not([hidden])': {display},
  }))
}

function responsiveBoxSizingStyle(props: ResponsiveBoxStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$sizing), (sizing) => ({
    boxSizing: BOX_SIZING[sizing],
  }))
}

function responsiveBoxHeightStyle(props: ResponsiveBoxStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$height), (height) => ({
    height: BOX_HEIGHT[height],
  }))
}

function responsiveBoxOverflowStyle(props: ResponsiveBoxStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$overflow), (overflow) => ({
    overflow,
  }))
}
