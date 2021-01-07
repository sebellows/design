import {CSSObject} from 'styled-components'
import {ThemeFontSize, ThemeFontKey} from '../../theme'
import {_getResponsiveProp, _rem, _responsive} from '../helpers'
import {_ThemeProps} from '../types'
import {_ResponsiveFontStyleProps} from './types'

/**
 * A utility function getting responsive font styles.
 * @internal Should not be used in production, as this might change.
 */
export function responsiveFont(
  fontKey: ThemeFontKey,
  props: _ResponsiveFontStyleProps & _ThemeProps
): CSSObject[] {
  const {$size, $weight, theme} = props
  const {fonts, media} = theme.sanity
  const {family, sizes, weights} = fonts[fontKey]
  const fontWeight = ($weight && weights[$weight]) || weights.regular

  // @todo: make this configurable
  const defaultSize = sizes[2]

  const base = {
    position: 'relative',
    fontFamily: family,
    fontWeight,
    padding: '1px 0',
    margin: 0,

    // '&:before': {
    //   content: '',
    //   display: 'block',
    //   height: 0,
    // },

    // '&:after': {
    //   content: '',
    //   display: 'block',
    //   height: 0,
    // },

    '&:not([hidden])': {
      display: 'block',
    },
  } as CSSObject

  const resp = _responsive(media, _getResponsiveProp($size), (sizeIndex) =>
    fontSize(sizes[sizeIndex] || defaultSize)
  )

  return [base, ...resp]
}

export function fontSize(size: ThemeFontSize): CSSObject {
  const negHeight = size.ascenderHeight + size.descenderHeight
  const capHeight = size.lineHeight - negHeight

  return {
    fontSize: _rem(size.fontSize),
    lineHeight: _rem(size.lineHeight),
    letterSpacing: _rem(size.letterSpacing),
    transform: `translateY(${_rem(size.descenderHeight)})`,

    '&:before': {
      marginTop: `calc(${_rem(0 - negHeight)} - 1px)`,
    },

    '&:after': {
      marginBottom: '-1px',
    },

    '& [data-sanity-icon]': {
      fontSize: _rem(size.iconSize),
      margin: _rem((capHeight - size.iconSize) / 2),
    },
  }
}
