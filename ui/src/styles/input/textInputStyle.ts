import {CSSObject} from 'styled-components'
import {getResponsiveProp, rem, responsive} from '../helpers'
import {ThemeProps} from '../types'

export interface TextInputInputStyleProps {
  uiSize?: number | number[]
  weight?: 'regular' | 'medium' | 'semibold' | 'bold'
}

export interface TextInputRepresentationStyleProps {
  border?: boolean
  hasPrefix?: boolean
  hasSuffix?: boolean
}

export const textInputStyle = {
  root: () => [rootStyle],
  input: () => [inputBaseStyle, inputFontSizeStyle],
  representation: representationStyle,
}

function rootStyle(): CSSObject {
  return {
    '&:not([hidden])': {
      display: 'flex',
    },
  }
}

function inputBaseStyle(props: TextInputInputStyleProps & ThemeProps): CSSObject {
  const {theme, weight} = props
  const font = theme.sanity.fonts.text
  const color = theme.sanity.color.input

  return {
    appearance: 'none',
    background: 'none',
    border: 0,
    borderRadius: 0,
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: font.family,
    fontWeight: (weight && font.weights[weight]) || font.weights.regular,
    margin: 0,
    position: 'relative',
    zIndex: 1,
    display: 'block',

    // &:is(textarea)
    '&[data-as="textarea"]': {
      resize: 'none',
    },

    // enabled
    '&:not(:invalid):not(:disabled)': {
      color: color.default.enabled.fg,

      '&::placeholder': {
        color: color.default.enabled.placeholder,
      },
    },

    // disabled
    '&:not(:invalid):disabled': {
      color: color.default.disabled.fg,

      '&::placeholder': {
        color: color.default.disabled.placeholder,
      },
    },

    // invalid
    '&:invalid': {
      color: color.invalid.enabled.fg,

      '&::placeholder': {
        color: color.invalid.enabled.placeholder,
      },
    },
  }
}

function inputFontSizeStyle(props: TextInputInputStyleProps & ThemeProps) {
  const {theme} = props

  return responsive(
    theme.sanity.media,
    getResponsiveProp(props.uiSize, [2]).map((sizeIndex) => {
      const size = theme.sanity.fonts.text.sizes[sizeIndex] || theme.sanity.fonts.text.sizes[2]

      return {
        fontSize: rem(size.fontSize),
        lineHeight: size.lineHeight / size.fontSize,
      }
    })
  )
}

function representationStyle(props: TextInputRepresentationStyleProps & ThemeProps): CSSObject[] {
  const {border, hasPrefix, hasSuffix, theme} = props
  const color = theme.sanity.color.input

  return [
    {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'block',
      pointerEvents: 'none',
      zIndex: 0,

      // enabled
      color: color.default.enabled.fg,
      backgroundColor: color.default.enabled.bg,
      boxShadow: border ? `inset 0 0 0 1px ${color.default.enabled.border}` : undefined,

      // focused
      '*:not(:disabled):focus + &': {
        boxShadow: '0 0 0 1px var(--card-bg-color), 0 0 0 3px var(--card-focus-ring-color)',
      },

      // invalid
      '*:not(:disabled):invalid + &': {
        color: color.invalid.enabled.fg,
        backgroundColor: color.invalid.enabled.bg,
        boxShadow: border ? `inset 0 0 0 1px ${color.invalid.enabled.border}` : undefined,
      },

      // disabled
      '*:disabled + &': {
        color: color.default.disabled.fg,
        backgroundColor: color.default.disabled.bg,
        boxShadow: border ? `inset 0 0 0 1px ${color.default.disabled.border}` : undefined,
      },

      // hovered
      '@media (hover: hover)': {
        '*:not(:disabled):not(:invalid):hover + &': {
          color: color.default.hovered.fg,
          backgroundColor: color.default.hovered.bg,
        },

        '*:not(:disabled):not(:invalid):not(:focus):hover + &': {
          boxShadow: border ? `inset 0 0 0 1px ${color.default.hovered.border}` : 'none',
        },
      },
    },
    hasPrefix ? {borderTopLeftRadius: 0, borderBottomLeftRadius: 0} : {},
    hasSuffix ? {borderTopRightRadius: 0, borderBottomRightRadius: 0} : {},
  ]
}
