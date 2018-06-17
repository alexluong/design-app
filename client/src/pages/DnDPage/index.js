import React from 'react';
import styled from 'styled-components';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import DragObject from './DragObject';
import DropArea from './DropArea';

class DnDPage extends React.Component {
  render() {
    return (
      <Container>
        <DragObject />
        <DropArea />
      </Container>
    );
  }
}

export default DragDropContext(HTML5Backend)(DnDPage);

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #cecece;
`;
