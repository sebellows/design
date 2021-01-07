import {ThemeFontWeightKey} from '../../theme'
import {TextAlign} from '../../types'

/**
 * @internal Should not be used in production, as this might change.
 */
export interface _ResponsiveFontSizeStyleProps {
  $size?: number | number[]
}

/**
 * @internal Should not be used in production, as this might change.
 */
export interface _FontWeightStyleProps {
  $weight?: ThemeFontWeightKey
}

/**
 * @internal Should not be used in production, as this might change.
 */
export interface _ResponsiveTextAlignStyleProps {
  $align?: TextAlign | TextAlign[]
}

/**
 * @internal Should not be used in production, as this might change.
 */
export interface _ResponsiveFontStyleProps
  extends _FontWeightStyleProps,
    _ResponsiveFontSizeStyleProps {
  $accent?: boolean
  $muted?: boolean
}
