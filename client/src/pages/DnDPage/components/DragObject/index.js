import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import DnDComponent from '../DndComponents';
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
    const { connectDragSource, isDragging, type, id, style } = this.props;

    return (
      <StyledDragObject
        innerRef={instance => connectDragSource(instance)}
        style={{
          ...style,
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <DnDComponent type={type} id={id} style={{ zIndex: -1 }} />
      </StyledDragObject>
    );
  }
}

const dragObjectSource = {
  beginDrag(props) {
    const { id, type } = props;

    if (id) {
      return { id, type };
    }

    return { type };
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

const StyledDragObject = styled.span`
  /* width: 10rem; */
  /* height: 10rem; */
  cursor: move;
  ${position('centerChildren', { display: 'inline-flex' })};
`;
