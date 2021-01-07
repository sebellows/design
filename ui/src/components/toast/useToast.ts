import {useContext} from 'react'
import {ToastContext, ToastContextValue} from './toastContext'

/**
 * @public
 */
export function useToast(): ToastContextValue {
  const toast = useContext(ToastContext)

  if (!toast) {
    throw new Error('Toast: missing context value')
  }

  return toast
}
