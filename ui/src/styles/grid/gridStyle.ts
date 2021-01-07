import {CSSObject} from 'styled-components'
import {_getResponsiveProp, _rem, _responsive} from '../helpers'
import {_ThemeProps} from '../types'
import {ResponsiveGridStyleProps} from './types'

const GRID_CSS: CSSObject = {
  '&:not([hidden])': {display: 'grid'},
  '&[data-as="ul"],&[data-as="ol"]': {
    listStyle: 'none',
  },
}

const GRID_AUTO_COLUMS = {
  auto: 'auto',
  min: 'min-content',
  max: 'max-content',
  fr: 'minmax(0, 1fr)',
}

const GRID_AUTO_ROWS = {
  auto: 'auto',
  min: 'min-content',
  max: 'max-content',
  fr: 'minmax(0, 1fr)',
}

export function responsiveGridStyle(): ((
  props: ResponsiveGridStyleProps & _ThemeProps
) => CSSObject[])[] {
  return [
    () => [GRID_CSS],
    responsiveGridAutoFlowStyle,
    responsiveGridAutoRowsStyle,
    responsiveGridAutoColsStyle,
    responsiveGridColumnsStyle,
    responsiveGridRowsStyle,
    responsiveGridGapStyle,
    responsiveGridGapXStyle,
    responsiveGridGapYStyle,
  ]
}

function responsiveGridAutoFlowStyle(props: ResponsiveGridStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$autoFlow), (autoFlow) => ({
    gridAutoFlow: autoFlow,
  }))
}

function responsiveGridAutoRowsStyle(props: ResponsiveGridStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$autoRows), (autoRows) => ({
    gridAutoRows: autoRows && GRID_AUTO_ROWS[autoRows],
  }))
}

function responsiveGridAutoColsStyle(props: ResponsiveGridStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$autoCols), (autoCols) => ({
    gridAutoColumns: autoCols && GRID_AUTO_COLUMS[autoCols],
  }))
}

function responsiveGridColumnsStyle(props: ResponsiveGridStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$columns), (columns) => ({
    gridTemplateColumns: columns && `repeat(${columns},minmax(0,1fr));`,
  }))
}

function responsiveGridRowsStyle(props: ResponsiveGridStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$rows), (rows) => ({
    gridTemplateRows: rows && `repeat(${rows},minmax(0,1fr));`,
  }))
}

function responsiveGridGapStyle(props: ResponsiveGridStyleProps & _ThemeProps) {
  const {theme} = props
  const {media, space} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$gap), (gap) => ({
    gridGap: gap ? _rem(space[gap]) : undefined,
  }))
}

function responsiveGridGapXStyle(props: ResponsiveGridStyleProps & _ThemeProps) {
  const {theme} = props
  const {media, space} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$gapX), (gapX) => ({
    columnGap: gapX ? _rem(space[gapX]) : undefined,
  }))
}

function responsiveGridGapYStyle(props: ResponsiveGridStyleProps & _ThemeProps) {
  const {theme} = props
  const {media, space} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$gapY), (gapY) => ({
    rowGap: gapY ? _rem(space[gapY]) : undefined,
  }))
}
