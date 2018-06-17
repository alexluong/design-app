import React from 'react';
import styled from 'styled-components';

import DragObject from './DragObject';

class Sidebar extends React.Component {
  render() {
    return (
      <Container>
        <DragObject />
      </Container>
    );
  }
}

export default Sidebar;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #ccc;
`;
