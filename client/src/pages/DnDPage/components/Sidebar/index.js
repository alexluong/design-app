import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { clear } from 'modules/dnd';
import DragObject from '../DragObject';

class Sidebar extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <DragObject type="button" />
          <DragObject type="block" />
          <DragObject type="input" />
        </div>
        {/* <button onClick={() => console.log('open modal')}>Open modal</button> */}
        <button onClick={() => this.props.clear()}>Clear</button>
      </Container>
    );
  }
}

export default connect(
  null,
  { clear },
)(Sidebar);

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #ccc;
  z-index: 5;
  /* display: grid; */
  /* grid-template-rows: auto 50px; */
`;
