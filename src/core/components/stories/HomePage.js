import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import HomePage from '../home/HomePage';

storiesOf('Core.HomePage', module)
  .add('default view', () => (
    <HomePage />
  ));
