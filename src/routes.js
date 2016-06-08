import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomeLayout from './core/components/layouts/HomeLayout';
import HomePage from './core/components/home/HomePage';
import NotFoundPage from './core/components/NotFoundPage.js';

export default (
  <Route path="/" component={HomeLayout}>
    <IndexRoute component={HomePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
