import React from 'react';
import styled from 'styled-components';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Sidebar from './Sidebar';
import DropArea from './DropArea';

class DnDPage extends React.Component {
  render() {
    return (
      <Container>
        <Sidebar />
        <DropArea />
      </Container>
    );
  }
}

export default DragDropContext(HTML5Backend)(DnDPage);

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20rem auto;
`;
