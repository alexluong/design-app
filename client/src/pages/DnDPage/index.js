import React from 'react';
import styled from 'styled-components';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import DropArea from './components/DropArea';
import CustomDragLayer from './components/CustomDragLayer';

class DnDPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Sidebar />
          <DropArea />
          <Rightbar />
        </Container>
        <CustomDragLayer />
      </React.Fragment>
    );
  }
}

export default DragDropContext(HTML5Backend)(DnDPage);

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20rem auto 50rem;
`;
