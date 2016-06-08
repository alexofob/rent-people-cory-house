import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import HomeNavBar from '../navbar/HomeNavBar';

storiesOf('Core.HomeNavBar', module)
  .add('default view', () => (
    <HomeNavBar />
  ));
