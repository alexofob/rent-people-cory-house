import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './style';
import { Flex, Box } from 'reflexbox';

import {
  Input,
  Button,
  ButtonOutline,
  Space,
  Divider,
  Text
} from 'rebass';

import FaFacebook from 'react-icons/lib/fa/facebook';

const Login = ({ onFacebookLogin, onResetPwdClick, onSignUpClick,
  fields, handleSubmit, submitting }) => {

  const { email, password } = fields;
  return (
  <div
    style={{width: 400}}>
    <Button
      onClick={onFacebookLogin}
      big
      style={{ "width" : "100%" }}
    >
     <strong><FaFacebook /></strong>
      <Space x={4} />
      Log in with Facebook
    </Button>
    <Space />
    <div styleName="separator">
      <span>or</span>
    </div>
    <Space />
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="Email Address"
        {...email}
        message={email.touched && email.error ? email.error : ""}
        invalid={email.touched && email.error ? true : ""}
      />
      <Space />
      <Input
        label="Password"
        type="password"
        {...password}
        message={password.touched && password.error ? password.error : ""}
        invalid={email.touched && email.error ? true : ""}
      />
      <Space x={2}/>
      <Flex
        align="center"
        justify="space-between"
      >
        <Box
          auto
        >
          <Button children='Log In'
            disabled={submitting}
          />
        </Box>
        <Box >
          <span id="forgot-password">
            <a href="#" onClick={onResetPwdClick}>
              <Text small> Forgot Password?</Text>
            </a>
          </span>
        </Box>
      </Flex>
      <Divider />
      <Flex
        align="center"
        justify="space-between"
      >
        <Box
          auto
        >
          Don't have an account?
        </Box>
        <Box>
           <ButtonOutline children='Sign up'
             onClick={onSignUpClick}
           />
        </Box>
      </Flex>
    </form>
  </div>
)};

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onFacebookLogin: PropTypes.func.isRequired,
  onResetPwdClick: PropTypes.func.isRequired,
  onSignUpClick: PropTypes.func.isRequired,
  fields: PropTypes.object,
  submitting: PropTypes.bool
};

export default CSSModules(Login, style);

