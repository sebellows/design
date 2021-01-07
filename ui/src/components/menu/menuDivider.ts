import styled, {DefaultTheme, StyledComponent} from 'styled-components'

/**
 * @public
 */
export const MenuDivider: StyledComponent<
  'hr',
  DefaultTheme,
  // eslint-disable-next-line @typescript-eslint/ban-types
  {},
  never
> = styled.hr`
  height: 1px;
  border: 0;
  background: var(--card-hairline-soft-color);
  margin: 0;
`
