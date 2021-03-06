import {isHTMLAnchorElement, isHTMLButtonElement} from '../../helpers'

function isFocusable(element: HTMLElement) {
  return (
    (isHTMLAnchorElement(element) && element.getAttribute('data-disabled') !== 'true') ||
    (isHTMLButtonElement(element) && !element.disabled)
  )
}

export function getFocusableElements(elements: HTMLElement[]) {
  return elements.map((element) => {
    return {element, focusable: isFocusable(element)}
  })
}
