import React from 'react';
import { connect } from 'react-redux';

import { socialSignIn } from 'modules/auth';

class AuthSuccessPage extends React.Component {
  state = {
    checked: false,
    success: false,
  };

  componentDidMount = async () => {
    const hash = this.props.location.hash;
    if (hash.length === 0) {
      this.setState({ checked: true });
      return;
    }

    const token = hash.slice(1);
    this.props.socialSignIn(token);
  };

  render() {
    const { checked, success } = this.state;
    if (checked && !success) {
      return <p>Auth Fail</p>;
    }

    // TODO: This should be a spinner
    return <p>Auth Success</p>;
  }
}

export default connect(
  null,
  { socialSignIn },
)(AuthSuccessPage);
