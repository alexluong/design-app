import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DragLayer } from 'react-dnd';

import DnDComponent from '../../DndComponents';
import { position } from 'config/theme';

const XYCoord = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
});

class CustomDragLayer extends Component {
  static propTypes = {
    item: PropTypes.object,
    initialOffset: XYCoord,
    currentOffset: XYCoord,
    isDragging: PropTypes.bool.isRequired,
  };

  render() {
    const { isDragging, item } = this.props;

    if (!isDragging) {
      return null;
    }

    const { type } = item;

    return (
      <Container>
        <DnDComponent type={type} style={getItemStyles(this.props)} />;
      </Container>
    );
  }
}

function collect(monitor) {
  return {
    item: monitor.getItem(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  };
}

export default DragLayer(collect)(CustomDragLayer);

function getItemStyles(props) {
  const { initialOffset, currentOffset } = props;

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
