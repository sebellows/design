import {css} from 'styled-components'
import {ThemeProps} from '../../styles'
import {borderStyle, focusRingStyle} from '../../styles/_internal/focusRing'
import {ThemeColorButtonState} from '../../theme'
import {ButtonMode, ButtonTone} from './types'

export function buttonBaseStyles() {
  return css`
    -webkit-font-smoothing: inherit;
    appearance: none;
    display: inline-flex;
    align-items: center;
    font: inherit;
    border: 0;
    outline: none;
    user-select: none;
    text-decoration: none;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    text-align: left;
    /* width: stretch; */

    & > span {
      display: block;
      flex: 1;
      min-width: 0;
      border-radius: inherit;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `
}

const buttonTheme = {border: {width: 1}}

function buttonColorVarsStyle(color: ThemeColorButtonState) {
  return {
    '--card-bg-color': color.bg,
    '--card-fg-color': color.fg,
    '--card-border-color': color.border,
  }
}

export function buttonColorStyles(props: {uiMode: ButtonMode; tone: ButtonTone} & ThemeProps) {
  const {theme, uiMode} = props
  const {focusRing} = theme.sanity
  const base = theme.sanity.color.base
  const mode = theme.sanity.color.button[uiMode] || theme.sanity.color.button.default
  const color = mode[props.tone] || mode.default
  const border = {width: buttonTheme.border.width, color: 'var(--card-border-color)'}

  return [
    buttonColorVarsStyle(color.enabled),
    {
      backgroundColor: 'var(--card-bg-color)',
      color: 'var(--card-fg-color)',
      boxShadow: borderStyle(border),
      '&:disabled, &[data-disabled="true"]': buttonColorVarsStyle(color.disabled),
      "&:not([data-disabled='true'])": {
        '&:focus': {
          boxShadow: focusRingStyle({base, border, focusRing}),
        },
        '&:focus:not(:focus-visible)': {
          boxShadow: 'none',
        },
        '@media (hover: hover)': {
          '&:hover': buttonColorVarsStyle(color.hovered),
          '&:active': buttonColorVarsStyle(color.pressed),
          '&[data-selected]': buttonColorVarsStyle(color.selected),
        },
      },
    },
    theme.sanity.styles?.button?.root,
  ]
}