import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DragSource } from 'react-dnd';

import { position } from 'config/theme';
import { ItemTypes } from './constants';

const dragObjectSource = {
  beginDrag(props) {
    return {};
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

const propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

class DragObject extends React.Component {
  render() {
    const { connectDragSource, isDragging } = this.props;

    return (
      <StyledDragObject
        innerRef={instance => connectDragSource(instance)}
        style={{
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        Drag me
      </StyledDragObject>
    );
  }
}

DragObject.propTypes = propTypes;
export default DragSource(ItemTypes.DRAG_OBJECT, dragObjectSource, collect)(
  DragObject,
);

const StyledDragObject = styled.div`
  width: 300px;
  height: 200px;
  background-color: white;
  cursor: pointer;
  ${position('centerChildren')};
`;
