import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DragLayer } from 'react-dnd';

import DnDComponent from './DndComponents';

const XYCoord = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
});

class CustomDragLayer extends Component {
  static propTypes = {
    item: PropTypes.object,
    // initialOffset: XYCoord,
    currentOffset: XYCoord,
    isDragging: PropTypes.bool.isRequired,
  };

  render() {
    const { isDragging, item, currentOffset } = this.props;

    if (!isDragging) {
      return null;
    }

    const { type } = item;

    return (
      <Container>
        <DnDComponent type={type} style={getItemStyles(currentOffset)} />
      </Container>
    );
  }
}

function collect(monitor) {
  return {
    item: monitor.getItem(),
    // initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  };
}

export default DragLayer(collect)(CustomDragLayer);

function getItemStyles(currentOffset) {
  if (!currentOffset) {
    return {
      display: 'none',
    };
  }

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    display: 'block',
    opacity: 0.75,
    transform,
    WebkitTransform: transform,
  };
}

const Container = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
