import React, {createElement, forwardRef} from 'react'
import {icons} from './icons'
import type {IconSymbol} from './icons'

interface IconProps {
  symbol: IconSymbol
}

export const Icon = forwardRef(
  (
    props: IconProps & Omit<React.SVGProps<SVGSVGElement>, 'ref'>,
    ref: React.Ref<SVGSVGElement>
  ) => {
    const {symbol, ...restProps} = props

    if (!icons[symbol]) {
      return null
    }

    return createElement(icons[symbol], {...restProps, ref})
  }
)

Icon.displayName = 'Icon'
