import React from 'react';
import { connect } from 'react-redux';

import { updateAvatar } from 'modules/user';

import { FileInput } from 'lib';
import AvatarPlaceholder from './AvatarPlaceholder';

class SettingsPage extends React.Component {
  state = {
    file: null,
  };

  handleFileSelect = files => {
    this.props.updateAvatar(files[0]);
  };

  render() {
    return (
      <React.Fragment>
        <FileInput
          show={false}
          accept="image/*"
          onChange={this.handleFileSelect}
        >
          <AvatarPlaceholder />
        </FileInput>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { updateAvatar },
)(SettingsPage);
