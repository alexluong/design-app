import React from 'react';
import styled from 'styled-components';

import DragObject from './DragObject';
import CustomDragLayer from './DragObject/CustomDragLayer';

class Sidebar extends React.Component {
  render() {
    return (
      <Container>
        <DragObject type="button" />
        <DragObject type="block" />
        <CustomDragLayer />
      </Container>
    );
  }
}

export default Sidebar;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #ccc;
  z-index: 5;
`;
