import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Login from '../account/Login';

storiesOf('Core.Account.Login', module)
  .add('default view', () => (
    <Login onFacebookLogin={action('click the Facebook button')}
      onResetPwdClick={action('click the Reset link')}
      onSignUpClick={action('click the Signup link')}
      handleSubmit={action('click the Submit button')}
      fields={{email: {name: 'email'}, password: {name: 'password'}}}
      submitting={false}
    />
  ))
  .add('submitting view', () => (
    <Login onFacebookLogin={action('click the Facebook button')}
       onResetPwdClick={action('click the Reset link')}
       onSignUpClick={action('click the Signup link')}
       handleSubmit={action('click the Submit button')}
       fields={{email: {name: 'email'}, password: {name: 'password'}}}
       submitting={true}
    />
  ))
  .add('error view', () => (
    <Login onFacebookLogin={action('click the Facebook button')}
       onResetPwdClick={action('click the Reset link')}
       onSignUpClick={action('click the Signup link')}
       handleSubmit={action('click the Submit button')}
       fields={{email: {name: 'email', touched: true, error: 'Email cannot be empty'},
         password: {name: 'password', touched: true, error: 'Password cannot be empty'}}}
       submitting={false}
    />
  ))
;
