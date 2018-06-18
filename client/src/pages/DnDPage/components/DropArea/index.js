import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import uuidv1 from 'uuid/v1';

// import DragObject from './DragObject';
import Rnd from './Rnd';
import { ItemTypes } from '../../constants';
import { drop } from 'modules/dnd';

class DropArea extends React.Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);

    this.dropArea = React.createRef();
  }

  render() {
    const { connectDropTarget, isOver, components } = this.props;
    const componentsKeys = Object.keys(components);

    return (
      <StyledDropArea
        innerRef={instance => {
          connectDropTarget(instance);
          this.dropArea = instance;
        }}
      >
        {componentsKeys.map(key => {
          const component = components[key];
          return <Rnd key={component.id} {...component} />;
        })}
        <Overlay show={isOver} />
      </StyledDropArea>
    );
  }
}

const dropAreaTarget = {
  drop(props, monitor, component) {
    console.log('drop');
    //* Object stuff
    const object = monitor.getItem();
    const objectOffset = monitor.getSourceClientOffset();

    //* Drop Area stuff
    const dropArea = component.dropArea;
    const dropAreaOffset = {
      x: dropArea.offsetLeft,
      y: dropArea.offsetTop,
    };

    //* Offset
    const offsetWithinDropArea = {
      x: objectOffset.x - dropAreaOffset.x,
      y: objectOffset.y - dropAreaOffset.y,
    };

    const droppedObject = {
      id: object.id || uuidv1(),
      type: object.type,
      position: offsetWithinDropArea,
      dimension: { width: 'auto', height: 'auto' },
    };

    props.drop(droppedObject);
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

DropArea = DropTarget(ItemTypes.DRAG_OBJECT, dropAreaTarget, collect)(DropArea);
export default connect(
  state => ({ components: state.dnd.components }),
  { drop },
)(DropArea);

const StyledDropArea = styled.div`
  z-index: 4;
  width: 100%;
  height: 100%;
  background-color: pink;
  position: relative;
  overflow: hidden;
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
