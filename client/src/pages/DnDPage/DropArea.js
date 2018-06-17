import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

import { ItemTypes } from './constants';
import { drop } from 'modules/dnd';

const dropAreaTarget = {
  drop(props, monitor, component) {
    const dropArea = component.dropArea;
    const dropAreaOffset = {
      x: dropArea.offsetLeft,
      y: dropArea.offsetTop,
    };
    const objectOffset = monitor.getSourceClientOffset();

    const offsetWithinDropArea = {
      x: objectOffset.x - dropAreaOffset.x,
      y: objectOffset.y - dropAreaOffset.y,
    };

    props.drop(offsetWithinDropArea);
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

const propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
};

class DropArea extends React.Component {
  constructor(props) {
    super(props);

    this.dropArea = React.createRef();
  }

  render() {
    const { connectDropTarget, isOver, elements } = this.props;
    return (
      <StyledDropArea
        innerRef={instance => {
          connectDropTarget(instance);
          this.dropArea = instance;
        }}
      >
        {elements.map(({ x, y }, i) => {
          console.log(x, y);
          return <Element key={i} x={x} y={y} />;
        })}
        <Overlay show={isOver} />
      </StyledDropArea>
    );
  }
}

DropArea.propTypes = propTypes;
DropArea = DropTarget(ItemTypes.DRAG_OBJECT, dropAreaTarget, collect)(DropArea);
export default connect(
  state => ({ elements: state.dnd.elements }),
  { drop },
)(DropArea);

const StyledDropArea = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
  position: relative;
`;

const Overlay = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: yellow;
`;

const Element = styled.div`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: 10rem;
  height: 10rem;
  background-color: white;
  cursor: pointer;
`;
