import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Login from './login';

chai.use(chaiEnzyme());

describe('core.components.account.login', () => {
  let submitting, touched, error, onFacebookLogin, onResetPwdClick, handleSubmit;
  beforeEach(() => {
    submitting = false
    touched = false
    error = null
    resetForm = sinon.spy()
    onSaveResponse = Promise.resolve()
    onSave = sinon.stub()
    onSave.returns(onSaveResponse)
  })
  const clickMe = sinon.stub();
  const wrapper = shallow(
    <Login onFacebookLogin={clickMe}
           onResetPwdClick={clickMe}
           onSignUpClick={clickMe}
           handleSubmit={clickMe}
           fields={{email: {name: 'email'}, password: {name: 'password'}}}
           submitting={false}
    />);
  it('should display the login form', () => {
    const inputs = wrapper.find('Input');
    const buttons = wrapper.find('Button');
    expect(inputs.at(0).props().name).to.equal("email");
    expect(inputs.at(1).props().name).to.equal("password");
    expect(buttons).to.have.length(2);
  });

  it('should show the error if there are any', () => {
    const error = 'TheError';
    expect(el.html()).to.match(/TheError/);
  });

});


