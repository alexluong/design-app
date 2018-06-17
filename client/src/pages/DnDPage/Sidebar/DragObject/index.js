import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import DnDComponent from '../../DndComponents';
import { position } from 'config/theme';
import { ItemTypes } from '../../constants';

class DragObject extends React.Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage());
  }

  render() {
    const { connectDragSource, isDragging, type } = this.props;

    return (
      <StyledDragObject
        innerRef={instance => connectDragSource(instance)}
        style={{
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <DnDComponent type={type} style={{ zIndex: -1 }} />
      </StyledDragObject>
    );
  }
}

const dragObjectSource = {
  beginDrag(props) {
    return {
      type: props.type,
    };
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

export default DragSource(ItemTypes.DRAG_OBJECT, dragObjectSource, collect)(
  DragObject,
);

export const StyledDragObject = styled.span`
  /* width: 10rem; */
  /* height: 10rem; */
  cursor: pointer;
  ${position('centerChildren', { display: 'inline-flex' })};
`;
