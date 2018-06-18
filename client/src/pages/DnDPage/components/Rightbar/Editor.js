import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/sass';
import 'brace/theme/github';

class Editor extends React.Component {
  state = {
    value: '',
  };

  static getDerivedStateFromProps(props) {
    return { value: props.value };
  }

  render() {
    const { value } = this.state;

    return (
      <AceEditor
        mode="sass"
        theme="github"
        width="100%"
        tabSize={2}
        onChange={value => this.props.handleEditorChange(value)}
        value={value}
      />
    );
  }
}

export default Editor;
