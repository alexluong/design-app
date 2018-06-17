import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from 'modules/auth';

class SignOutPage extends React.Component {
  componentDidMount() {
    this.props.signOut();
  }

  render() {
    return (
      <div>
        <p>We're sorry to see you go...</p>
        <Link to="/sign-in">Sign In</Link>
      </div>
    );
  }
}

export default connect(
  null,
  { signOut },
)(SignOutPage);
