import {ThemeProps} from '../types'
import {responsiveFont} from './responsiveFont'
import {ResponsiveFontStyleProps} from './types'

/**
 * Get responsive CSS for the `code` font style.
 * @beta Should not be used in production, as this might change.
 */
export function responsiveCodeFontStyle(props: ResponsiveFontStyleProps & ThemeProps) {
  return responsiveFont('code', props)
}
