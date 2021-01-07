import {CSSObject} from 'styled-components'
import {_getResponsiveProp, _responsive} from '../helpers'
import {_ThemeProps} from '../types'
import {ResponsiveBorderStyleProps} from './types'

const BORDER_VALUE = '1px solid var(--card-border-color)'

export function responsiveBorderStyle(): ((
  props: ResponsiveBorderStyleProps & _ThemeProps
) => CSSObject[])[] {
  return [border, borderTop, borderRight, borderBottom, borderLeft]
}

function border(props: ResponsiveBorderStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$border), (value) =>
    value ? {'&&': {border: BORDER_VALUE}} : {'&&': {border: 0}}
  )
}

function borderTop(props: ResponsiveBorderStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$borderTop), (value) =>
    value ? {'&&': {borderTop: BORDER_VALUE}} : {'&&': {borderTop: 0}}
  )
}

function borderRight(props: ResponsiveBorderStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$borderRight), (value) =>
    value ? {'&&': {borderRight: BORDER_VALUE}} : {'&&': {borderRight: 0}}
  )
}

function borderBottom(props: ResponsiveBorderStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$borderBottom), (value) =>
    value ? {'&&': {borderBottom: BORDER_VALUE}} : {'&&': {borderBottom: 0}}
  )
}

function borderLeft(props: ResponsiveBorderStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$borderLeft), (value) =>
    value ? {'&&': {borderLeft: BORDER_VALUE}} : {'&&': {borderLeft: 0}}
  )
}
