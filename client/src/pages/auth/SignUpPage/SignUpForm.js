import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';

import { clearErrorMessage } from 'modules/auth';
import renderInputField from '../renderInputField';

class SignUpForm extends React.Component {
  static propTypes = {
    handleSubmit: func.isRequired,
    onSubmit: func.isRequired,
  };

  clearErrorMessage = () => {
    this.props.clearErrorMessage();
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} method="post">
        <Field
          name="username"
          type="text"
          placeholder="your_username"
          label="Enter username:"
          component={renderInputField}
          onFocus={this.clearErrorMessage}
          required
        />

        <Field
          name="email"
          type="email"
          placeholder="you@example.com"
          label="Enter email:"
          component={renderInputField}
          onFocus={this.clearErrorMessage}
          required
        />

        <Field
          name="password"
          type="password"
          placeholder="password"
          label="Enter password:"
          component={renderInputField}
          onFocus={this.clearErrorMessage}
          required
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'sign-up',
})(
  connect(
    null,
    { clearErrorMessage },
  )(SignUpForm),
);
