import {useContext} from 'react'
import {BoundaryElementContext} from './boundaryElementContext'

/**
 * @public
 */
export function useBoundaryElement(): HTMLElement | null {
  return useContext(BoundaryElementContext)
}
