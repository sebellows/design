import {useContext} from 'react'
import {MenuContext, MenuContextValue} from './menuContext'

export function useMenu(): MenuContextValue {
  const menu = useContext(MenuContext)

  if (!menu) {
    throw new Error('Menu: missing context value')
  }

  return menu
}
