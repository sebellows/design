import {_clamp} from '../helpers'
import {_RGB} from '../types'

function multiplyChannel(b: number, s: number) {
  return b * s
}

/**
 * Apply the \`multiply\` blend mode
 * Source: https://www.w3.org/TR/compositing-1/#blendingmultiply
 *
 * @internal
 */
export function _multiply(b: _RGB, s: _RGB): _RGB {
  return {
    r: Math.round(_clamp(multiplyChannel(b.r / 255, s.r / 255) * 255)),
    g: Math.round(_clamp(multiplyChannel(b.g / 255, s.g / 255) * 255)),
    b: Math.round(_clamp(multiplyChannel(b.b / 255, s.b / 255) * 255)),
  }
}
