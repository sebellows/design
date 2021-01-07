import React from 'react'
import ReactDOM from 'react-dom'

import {usePortal} from './hooks'

/**
 * @public
 */
export interface PortalProps {
  children: React.ReactNode
}

/**
 * @public
 */
export function Portal(props: PortalProps): React.ReactElement {
  const portal = usePortal()

  if (!portal.element) {
    return <></>
  }

  return ReactDOM.createPortal(props.children, portal.element)
}
