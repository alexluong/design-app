import React from 'react';
import styled from 'styled-components';
import { DragCard } from 'lib';

class Facebook extends React.Component {
  render() {
    return (
      <Container>
        <DragCard text="Drag me" />
      </Container>
    );
  }
}

export default Facebook;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
