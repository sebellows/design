import React, {forwardRef} from 'react'
import styled from 'styled-components'
import {
  _ResponsiveFontStyleProps,
  _responsiveTextAlignStyle,
  _responsiveTextFont,
} from '../../styles/internal'
import {ThemeFontWeightKey} from '../../theme'
import {TextAlign} from '../../types'
import {textBaseStyle} from './styles'

/**
 * @public
 */
export interface TextProps {
  accent?: boolean
  align?: TextAlign | TextAlign[]
  as?: React.ElementType | keyof JSX.IntrinsicElements
  muted?: boolean
  size?: number | number[]
  weight?: ThemeFontWeightKey
}

const Root = styled.div<_ResponsiveFontStyleProps>(
  _responsiveTextFont,
  _responsiveTextAlignStyle,
  textBaseStyle
)

/**
 * @public
 */
export const Text = forwardRef(
  (props: TextProps & Omit<React.HTMLProps<HTMLDivElement>, 'size'>, ref) => {
    const {accent = false, align, children, muted = false, size = 2, weight, ...restProps} = props

    return (
      <Root
        data-ui="Text"
        {...restProps}
        $accent={accent}
        $align={align}
        $muted={muted}
        ref={ref}
        $size={size}
        $weight={weight}
      >
        {children}
      </Root>
    )
  }
)

Text.displayName = 'Text'
