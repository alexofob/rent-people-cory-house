import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import HomeLayout from '../layouts/HomeLayout';

storiesOf('Core.HomeLayout', module)
  .add('default view', () => (
    <HomeLayout />
  ));
