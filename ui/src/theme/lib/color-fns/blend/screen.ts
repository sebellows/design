import {_clamp} from '../helpers'
import {_RGB} from '../types'

function screenChannel(b: number, s: number) {
  return b + s - b * s
}

/**
 * Apply the \`screen\` blend mode
 * Source: https://www.w3.org/TR/compositing-1/#blendingscreen
 * @internal
 */
export function _screen(b: _RGB, s: _RGB): _RGB {
  return {
    r: Math.round(_clamp(screenChannel(b.r / 255, s.r / 255) * 255)),
    g: Math.round(_clamp(screenChannel(b.g / 255, s.g / 255) * 255)),
    b: Math.round(_clamp(screenChannel(b.b / 255, s.b / 255) * 255)),
  }
}
