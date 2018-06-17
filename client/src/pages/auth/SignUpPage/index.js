import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signUp } from 'modules/auth';
import { SIGN_IN } from 'routes';
import SignUpForm from './SignUpForm';

import { LinkButton } from 'lib';

class SignUpPage extends React.Component {
  onSubmit = values => {
    this.props.signUp(values);
  };

  render() {
    const { errorMessage } = this.props;
    return (
      <React.Fragment>
        {errorMessage && <p>{errorMessage}</p>}
        <SignUpForm onSubmit={this.onSubmit} />
        <LinkButton tag={Link} to={SIGN_IN}>
          Have an account already? Sign in.
        </LinkButton>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.errorMessage };
};

export default connect(
  mapStateToProps,
  { signUp },
)(SignUpPage);
