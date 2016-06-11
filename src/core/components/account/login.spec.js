import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Login from './login';

chai.use(chaiEnzyme());

describe('core.components.account.login', () => {
  let onFacebookLogin, handleSubmit, submitting, onResetPwdClick, onSignUpClick,
    touched, error;
  let wrapper = null;
  beforeEach(() => {
    touched: false;
    error: null;
    submitting = false;
  });

  const buildWrapper = () => {
    const props = {
      onFacebookLogin: sinon.stub(),
      fields: {
        email: {
          name: 'email',
          touched,
          error
        },
        password: {
          name: 'password',
          touched,
          error
        }
      },
      handleSubmit: fn => fn,
      submitting,
      onResetPwdClick: sinon.stub(),
      onSignUpClick: sinon.stub()
    }
    return shallow(<Login {...props}/>)
  }


  it('should display the login form', () => {
    wrapper = buildWrapper();
    const inputs = wrapper.find('TextField');
    const buttons = wrapper.find('RaisedButton');
    expect(inputs.at(0).props().name).to.equal("email");
    expect(inputs.at(1).props().name).to.equal("password");
    expect(buttons).to.have.length(2);
  });

  it("renders an error message for the input", () => {
    touched = true;
    error = "Required";
    wrapper = buildWrapper();
    const inputs = wrapper.find('TextField')
    expect(inputs.at(0)).to.have.prop('errorText', 'Required')
    expect(inputs.at(1)).to.have.prop('errorText', 'Required')
  });

  it("calls resetForm after onSave", (done) => {
    subject = buildSubject()
    subject.find('form').simulate('submit')
    expect(onSave).to.have.been.called
    onSaveResponse.then(() => {
      expect(resetForm).to.have.been.called
      done()
    })
  })

});


