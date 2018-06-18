import React from 'react';
import PropTypes from 'prop-types';
import Rnd from 'react-rnd';
import { connect } from 'react-redux';

import { Toggle } from 'lib';
import DnDComponent from '../DndComponents';
import { update } from 'modules/dnd';

class RndComponent extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    position: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
    dimension: PropTypes.shape({
      width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
    }).isRequired,
  };

  /**
   * * Update new position
   */
  onDragStop = (e, d) => {
    const { id, type, dimension } = this.props;
    const newPosition = { x: d.x, y: d.y };

    this.props.update({ id, type, position: newPosition, dimension });
  };

  /**
   * * Change width or height if equal to 'auto'
   */
  onResizeStart = (e, direction, ref) => {
    const { id, type, position, dimension } = this.props;

    const newDimension = dimension;
    let changed = false;
    if (newDimension.width === 'auto') {
      newDimension.width = ref.clientWidth;
      changed = true;
    }
    if (newDimension.height === 'auto') {
      newDimension.height = ref.clientHeight;
      changed = true;
    }

    if (changed) {
      this.props.update({ id, type, position, dimension: newDimension });
    }
  };

  /**
   * * Update component dimension (and maybe position)
   */
  onResizeStop = (e, direction, ref, delta, position) => {
    const { id, type, dimension } = this.props;
    const newDimension = dimension;

    if (direction === 'left' || direction === 'right') {
      newDimension.width = dimension.width + delta.width;
    } else {
      newDimension.height = dimension.height + delta.height;
    }

    this.props.update({ id, type, position, dimension: newDimension });
  };

  render() {
    const { id, type, position, dimension } = this.props;
    const { width, height } = dimension;

    return (
      <Toggle on={false}>
        {({ on, toggle }) => (
          <Rnd
            key={id}
            default={{
              ...position,
              ...dimension,
            }}
            onDragStop={this.onDragStop}
            onResizeStart={this.onResizeStart}
            onResizeStop={this.onResizeStop}
            style={on ? { outline: '1px solid red' } : {}}
            extendsProps={{
              onMouseEnter: toggle,
              onMouseLeave: toggle,
            }}
          >
            <DnDComponent type={type} id={id} width={width} height={height} />
          </Rnd>
        )}
      </Toggle>
    );
  }
}

export default connect(
  null,
  { update },
)(RndComponent);
