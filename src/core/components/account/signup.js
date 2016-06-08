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


const SignUp = ({  }) => (
  <div>
  <Button
    onclick={onFacebookLogin}
    big
    style={{ "width" : "100%" }}
  >
    <strong><FaFacebook /></strong>
    <Space x={4}/>
    Log in with Facebook
  </Button>
  <Space />
  <div styleName="separator">
    <span>or</span>
  </div>
  <Space />
  <form onSubmit={handleSubmit}>
    <Input
      name={email}
      label="Email Address"
      {...email}
    />
    <Space />
    <Input
      name={password}
      label="Password"
      type="password"
      {...password}
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
)
;

SignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onFacebookLogin: PropTypes.func.isRequired,
  onResetPwdClick: PropTypes.func.isRequired,
  onSignUpClick: PropTypes.func.isRequired,
  fields: PropTypes.object,
  submitting: PropTypes.bool
};

export default CSSModules(SignUp, style);

