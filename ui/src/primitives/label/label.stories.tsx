import {Card, Container, Label} from '@sanity/ui'
import {select, withKnobs} from '@storybook/addon-knobs'
import React from 'react'
import {withCentered} from '~/storybook/decorators'

export default {
  title: 'Atoms/Label',
  decorators: [withCentered, withKnobs],
}

export const plain = (): React.ReactNode => {
  const size = select(
    'Size',
    {'0': 0, '1': 1, '2 (default)': undefined, '3': 3, '4': 4},
    undefined,
    'Props'
  )

  const weight = select(
    'Weight',
    {
      'Regular (default)': undefined,
      Medium: 'medium',
      Semibold: 'semibold',
      Bold: 'bold',
    },
    undefined,
    'Props'
  )

  return (
    <Container width={0}>
      <Card>
        <Label size={size} weight={weight}>
          Hello, world
        </Label>
        <Label size={size} weight={weight}>
          Hello, world
        </Label>
        <Label size={size} weight={weight}>
          Hello, world
        </Label>
      </Card>
    </Container>
  )
}
