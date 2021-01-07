import {createContext} from 'react'

export interface PortalContextValue {
  boundaryElement: HTMLElement | null
  element: HTMLElement | null
}

let globalElement: HTMLDivElement | null = null

export const defaultContextValue = {
  boundaryElement: null,
  get element(): HTMLDivElement {
    if (globalElement) return globalElement

    globalElement = document.createElement('div')
    globalElement.setAttribute('data-portal', '')
    document.body.appendChild(globalElement)

    return globalElement
  },
}

export const PortalContext = createContext<PortalContextValue>(defaultContextValue)
