import {useContext} from 'react'
import {LayerContext, LayerContextValue} from './layerContext'

/**
 * @public
 */
export function useLayer(): LayerContextValue {
  const layer = useContext(LayerContext)

  if (!layer) {
    throw new Error('Layer: missing context value')
  }

  return layer
}
