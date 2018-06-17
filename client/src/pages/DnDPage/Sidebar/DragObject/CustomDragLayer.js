import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DragLayer } from 'react-dnd';

import { position } from 'config/theme';

const XYCoord = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
});

class CustomDragLayer extends Component {
  static propTypes = {
    item: PropTypes.object,
    itemType: PropTypes.string,
    initialOffset: XYCoord,
    currentOffset: XYCoord,
    isDragging: PropTypes.bool.isRequired,
  };

  render() {
    const { item, itemType, isDragging } = this.props;

    if (!isDragging) {
      return null;
    }

    return (
      <Container>
        <Layer style={getItemStyles(this.props)} />
      </Container>
    );
  }
}

function collect(monitor) {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  };
}

export default DragLayer(collect)(CustomDragLayer);

function getItemStyles(props) {
  const { initialOffset, currentOffset } = props;
  console.log(currentOffset);
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    };
  }

  let { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;
  return {
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

const Layer = styled.div`
  z-index: 10000;
  width: 10rem;
  height: 10rem;
  background-color: green;
  cursor: pointer;
  ${position('centerChildren')};
`;
