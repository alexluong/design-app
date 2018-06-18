import React from 'react';
import { connect } from 'react-redux';

import { select } from 'modules/editor';

import { BlockComponent, blockType, blockStyles } from './BlockComponent';
import { ButtonComponent } from './ButtonComponent';
import { InputComponent } from './InputComponent';

class DnDComponent extends React.Component {
  state = {
    type: '',
    element: null,
  };

  static getDerivedStateFromProps(props) {
    const { type } = props;
    switch (type) {
      case blockType:
        return {
          element: <BlockComponent />,
          styles: blockStyles,
        };
      case 'button':
        return {
          element: <ButtonComponent />,
          styles: {},
        };
      case 'input':
        return {
          element: <InputComponent />,
          styles: {},
        };
      default:
        console.error(`ERROR: ${type} does not exist.`);
        return {};
    }
  }

  onDoubleClick = e => {
    const { type, id } = this.props;
    const { styles } = this.state;

    this.props.select({
      type,
      id,
      styles,
    });
  };

  render() {
    const { type, id, select, ...props } = this.props;
    const Element = this.state.element;
    const ReturnComponent = React.cloneElement(Element, {
      ...props,
      onDoubleClick: this.onDoubleClick,
    });

    return ReturnComponent;
  }
}

export default connect(
  null,
  { select },
)(DnDComponent);
