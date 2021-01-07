import {useContext} from 'react'
import {PortalContext, PortalContextValue} from './context'

/**
 * @public
 */
export function usePortal(): PortalContextValue {
  const portal = useContext(PortalContext)

  if (!portal) {
    throw new Error('missing portal in context')
  }

  return portal
}
