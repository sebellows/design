import React, {cloneElement, forwardRef, useEffect, useState} from 'react'
import {usePopper} from 'react-popper'
import {ThemeColorSchemeKey} from '../../theme'
import {Placement} from '../../types'
import {Layer, Portal, useBoundaryElement, usePortal} from '../../utils'
import {Card} from '../card'
import {PopoverArrow} from './arrow'

interface PopoverProps {
  boundaryElement?: HTMLElement | null
  children?: React.ReactElement
  content?: React.ReactNode
  disabled?: boolean
  open?: boolean
  padding?: number | number[]
  placement?: Placement
  portal?: boolean
  radius?: number | number[]
  referenceElement?: HTMLElement | null
  shadow?: number | number[]
  scheme?: ThemeColorSchemeKey
}

export const Popover = forwardRef(
  (
    props: PopoverProps & Omit<React.HTMLProps<HTMLDivElement>, 'as' | 'children' | 'content'>,
    ref
  ) => {
    const boundaryElementContext = useBoundaryElement()
    const {
      boundaryElement: boundaryElementProp = boundaryElementContext,
      children: child,
      content,
      disabled,
      open,
      padding,
      placement: placementProp,
      portal: portalProp = true,
      radius = 3,
      referenceElement: referenceElementProp,
      shadow = 3,
      scheme,
      style = {},
      ...restProps
    } = props
    const placement = typeof placementProp === 'string' ? placementProp : 'bottom'
    const portal = usePortal()
    const boundaryElement = boundaryElementProp || portal.boundaryElement
    const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null)
    const [popperElement, setPopperElement] = useState<HTMLElement | null>(null)
    const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null)
    const popperReferenceElement = referenceElementProp || referenceElement
    const popper = usePopper(popperReferenceElement, popperElement, {
      placement,
      modifiers: [
        {
          name: 'arrow',
          options: {
            element: arrowElement,
            padding: 4,
          },
        },
        {
          name: 'preventOverflow',
          options: {
            altAxis: true,
            boundary: boundaryElement || undefined,
            padding: 8,
          },
        },
        {
          name: 'offset',
          options: {
            offset: [0, 4],
          },
        },
      ],
    })

    const {attributes, forceUpdate, styles} = popper

    useEffect(() => {
      if (forceUpdate) forceUpdate()
    }, [forceUpdate, content, popperReferenceElement])

    if (disabled) {
      return child || <></>
    }

    const setRef = (el: HTMLElement | null) => {
      const childRef = (child as any).ref

      setReferenceElement(el)

      if (typeof childRef === 'function') {
        childRef(el)
      } else if (childRef) {
        childRef.current = el
      }
    }

    const setRootRef = (el: HTMLDivElement | null) => {
      setPopperElement(el)
      if (typeof ref === 'function') ref(el)
      else if (ref) ref.current = el
    }

    const node = (
      <Layer
        data-ui="Popover"
        {...restProps}
        ref={setRootRef}
        style={{...style, ...styles.popper, pointerEvents: 'all'}}
        {...attributes.popper}
      >
        <Card
          data-ui="PopoverCard"
          padding={padding}
          radius={radius}
          scheme={scheme}
          shadow={shadow}
        >
          <PopoverArrow ref={setArrowElement} tone="default" style={styles.arrow} />
          {content}
        </Card>
      </Layer>
    )

    return (
      <>
        {child && !referenceElementProp ? cloneElement(child, {ref: setRef}) : child || <></>}

        {open && (
          <>
            {portalProp && <Portal>{node}</Portal>}

            {!portalProp && node}
          </>
        )}
      </>
    )
  }
)

Popover.displayName = 'Popover'
