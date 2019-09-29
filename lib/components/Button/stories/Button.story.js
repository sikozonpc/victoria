import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '../src/Button'

storiesOf('Button', module)
  .add('Default Button', () => <Button>Default Button</Button>)
  .add('Primary Button', () => <Button type='primary'>Primary Button</Button>)
  .add('Secondary Button', () => <Button type='secondary'>Secondary Button</Button>)
  .add('Disabled Button', () => <Button disabled>Disabled Button</Button>)
