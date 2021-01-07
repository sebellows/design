import {useEffect, useLayoutEffect} from 'react'

/**
 * @public
 */
export const useIsomorphicEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
