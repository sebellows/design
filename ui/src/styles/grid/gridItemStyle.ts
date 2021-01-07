import {CSSObject} from 'styled-components'
import {_getResponsiveProp, _responsive} from '../helpers'
import {_ThemeProps} from '../types'
import {ResponsiveGridItemStyleProps} from './types'

export function responsiveGridItemStyle(): ((
  props: ResponsiveGridItemStyleProps & _ThemeProps
) => CSSObject[])[] {
  return [
    responsiveGridItemRowStyle,
    responsiveGridItemRowStartStyle,
    responsiveGridItemRowEndStyle,
    responsiveGridItemColumnStyle,
    responsiveGridItemColumnStartStyle,
    responsiveGridItemColumnEndStyle,
  ]
}

const GRID_ITEM_ROW = {
  auto: 'auto',
  full: '1 / -1',
}

const GRID_ITEM_COLUMN = {
  auto: 'auto',
  full: '1 / -1',
}

function responsiveGridItemRowStyle(props: ResponsiveGridItemStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$row), (row) => {
    if (typeof row === 'number') {
      return {gridRow: `span ${row} / span ${row}`}
    }

    return {gridRow: GRID_ITEM_ROW[row]}
  })
}

function responsiveGridItemRowStartStyle(props: ResponsiveGridItemStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$rowStart), (rowStart) => ({
    gridRowStart: rowStart,
  }))
}

function responsiveGridItemRowEndStyle(props: ResponsiveGridItemStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$rowEnd), (rowEnd) => ({gridRowEnd: rowEnd}))
}

function responsiveGridItemColumnStyle(props: ResponsiveGridItemStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$column), (column) => {
    if (typeof column === 'number') {
      return {gridColumn: `span ${column} / span ${column}`}
    }

    return {gridColumn: GRID_ITEM_COLUMN[column]}
  })
}

function responsiveGridItemColumnStartStyle(props: ResponsiveGridItemStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$columnStart), (columnStart) => ({
    gridColumnStart: columnStart,
  }))
}

function responsiveGridItemColumnEndStyle(props: ResponsiveGridItemStyleProps & _ThemeProps) {
  const {theme} = props
  const {media} = theme.sanity

  return _responsive(media, _getResponsiveProp(props.$columnEnd), (columnEnd) => ({
    gridColumnEnd: columnEnd,
  }))
}
