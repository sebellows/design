import {_parseColor, _rgbToHex, _screen, _multiply} from '../lib/color-fns'

export function multiply(bg: string, fg: string): string {
  const b = _parseColor(bg)
  const s = _parseColor(fg)
  const hex = _rgbToHex(_multiply(b, s))

  return hex
}

export function screen(bg: string, fg: string): string {
  const b = _parseColor(bg)
  const s = _parseColor(fg)
  const hex = _rgbToHex(_screen(b, s))

  return hex
}
