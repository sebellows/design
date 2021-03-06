import {getResponsiveProp, responsive, ThemeProps} from '../../styles'
import {DialogPosition} from './types'

export interface ResponsiveDialogPositionStyleProps {
  $position: DialogPosition | DialogPosition[]
}

export function dialogStyle({theme}: ThemeProps) {
  const color = theme.sanity.color.base

  return {
    '&:not([hidden])': {
      display: 'flex',
    },

    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    background: color.shadow.penumbra,
  }
}

export function responsiveDialogPositionStyle(
  props: ResponsiveDialogPositionStyleProps & ThemeProps
) {
  const {theme} = props
  const {media} = theme.sanity

  return responsive(media, getResponsiveProp(props.$position), (position) => ({'&&': {position}}))
}
