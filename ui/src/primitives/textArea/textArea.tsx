import React, {forwardRef} from 'react'
import styled from 'styled-components'
import {useForwardedRef, useCustomValidity} from '../../hooks'
import {
  responsiveInputPaddingStyle,
  responsiveRadiusStyle,
  ResponsiveRadiusStyleProps,
  textInputStyle,
  TextInputResponsivePaddingStyleProps,
  TextInputInputStyleProps,
} from '../../styles/internal'
import {ThemeFontWeightKey} from '../../theme'
import {ResponsiveRadiusProps} from '../types'

/**
 * @public
 */
export interface TextAreaProps extends ResponsiveRadiusProps {
  border?: boolean
  customValidity?: string
  fontSize?: number | number[]
  padding?: number | number[]
  weight?: ThemeFontWeightKey
}

const Root = styled.span(textInputStyle.root)

const InputRoot = styled.span`
  flex: 1;
  min-width: 0;
  display: block;
  position: relative;
`

const Input = styled.textarea<TextInputResponsivePaddingStyleProps & TextInputInputStyleProps>(
  responsiveInputPaddingStyle,
  textInputStyle.input
)

const Presentation = styled.div<ResponsiveRadiusStyleProps & TextInputInputStyleProps>(
  responsiveRadiusStyle,
  textInputStyle.representation
)

/**
 * @public
 */
export const TextArea = forwardRef(
  (
    props: TextAreaProps & Omit<React.HTMLProps<HTMLTextAreaElement>, 'as'>,
    forwardedRef: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    const {
      border = true,
      customValidity,
      disabled = false,
      fontSize = 2,
      padding = 3,
      radius = 1,
      ...restProps
    } = props

    const ref = useForwardedRef(forwardedRef)

    useCustomValidity(ref, customValidity)

    return (
      <Root data-ui="TextArea">
        <InputRoot>
          <Input
            data-as="textarea"
            {...restProps}
            $fontSize={fontSize}
            $padding={padding}
            disabled={disabled}
            ref={ref}
          />
          <Presentation $border={border} $radius={radius} />
        </InputRoot>
      </Root>
    )
  }
)

TextArea.displayName = 'TextArea'
