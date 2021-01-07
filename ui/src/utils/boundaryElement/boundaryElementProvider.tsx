import React from 'react'
import {BoundaryElementContext} from './boundaryElementContext'

/**
 * @public
 */
export function BoundaryElementProvider({
  children,
  element,
}: {
  children: React.ReactNode
  element: HTMLElement | null
}): React.ReactElement {
  return (
    <BoundaryElementContext.Provider value={element}>{children}</BoundaryElementContext.Provider>
  )
}
