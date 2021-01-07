import React, {forwardRef} from 'react'
import styled from 'styled-components'
import {LayerProvider} from './layerProvider'
import {useLayer} from './useLayer'

const Root = styled.div({position: 'relative'})

/**
 * @public
 */
export interface LayerProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements
  zOffset?: number
}

interface LayerChildrenProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements
}

const LayerChildren = forwardRef(
  (
    props: LayerChildrenProps & Omit<React.HTMLProps<HTMLDivElement>, 'as'>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const {children, style = {}, ...restProps} = props
    const {zIndex} = useLayer()

    return (
      <Root {...restProps} ref={ref} style={{...style, zIndex}}>
        {children}
      </Root>
    )
  }
)

LayerChildren.displayName = 'LayerChildren'

/**
 * @public
 */
export const Layer = forwardRef(
  (
    props: LayerProps & Omit<React.HTMLProps<HTMLDivElement>, 'as'>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const {children, zOffset = 1, ...restProps} = props

    return (
      <LayerProvider zOffset={zOffset}>
        <LayerChildren {...restProps} ref={ref}>
          {children}
        </LayerChildren>
      </LayerProvider>
    )
  }
)

Layer.displayName = 'Layer'
