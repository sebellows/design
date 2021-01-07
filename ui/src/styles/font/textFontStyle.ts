import {CSSObject} from 'styled-components'
import {_ThemeProps} from '../types'
import {responsiveFont} from './responsiveFont'
import {_ResponsiveFontStyleProps} from './types'

/**
 * Get responsive CSS for the `text` font style.
 * @internal Should not be used in production, as this might change.
 */
export function _responsiveTextFont(props: _ResponsiveFontStyleProps & _ThemeProps): CSSObject[] {
  return responsiveFont('text', props)
}
