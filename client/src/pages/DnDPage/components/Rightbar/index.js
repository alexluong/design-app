import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Editor from './Editor';

class Rightbar extends React.Component {
  state = {
    value: '',
    changed: false,
  };

  submit = () => {
    console.log(this.state.value);
  };

  render() {
    const { selected } = this.props;

    if (Object.keys(selected).length === 0) {
      return <Container />;
    }

    const { styles } = selected;
    const value = this.state.value
      ? this.state.value
      : `style {
${styles}
}`;

    return (
      <Container>
        <Editor
          value={value}
          handleEditorChange={value => this.setState({ value, changed: true })}
        />
        <button onClick={this.submit}>Submit</button>
      </Container>
    );
  }
}

export default connect(state => ({ selected: state.editor.selected }))(
  Rightbar,
);

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #ccc;
  z-index: 5;
`;
