import React from 'react';
import styled from 'styled-components';
import { Spring, animated, interpolate } from 'react-spring';
import { withGesture } from 'react-with-gesture';

class DragCard extends React.Component {
  state = {
    down: false,
    xDelta: 0,
  };

  static getDerivedStateFromProps(props, state) {
    const { down, xDelta } = props;
    if (!down && down !== state.down) {
      /**
       * * after drag, do something
       */
      console.log('doing something');
    }

    return { down, xDelta };
  }

  render() {
    const { down, xDelta } = this.state;
    const { text } = this.props;

    return (
      <Spring
        to={down ? { x: xDelta } : { x: 0 }}
        immediate={name => down && name === 'x'}
        native
      >
        {({ x }) => (
          <CardContainer
            style={{
              backgroundColor: x.interpolate({
                range: [-300, 300],
                output: ['#FF1C68', '#14D790'],
                extrapolate: 'clamp',
              }),
            }}
          >
            <Card
              style={{
                opacity: x.interpolate({
                  range: [-300, -100],
                  output: [0, 1],
                  extrapolate: 'clamp',
                }),
                transform: interpolate(
                  [
                    x,
                    x.interpolate({
                      range: [-300, 300],
                      output: [-45, 45],
                      extrapolate: 'clamp',
                    }),
                  ],
                  (x, rotate) => `translateX(${x}px) rotate(${rotate}deg)`,
                ),
              }}
            >
              <h1>{text}</h1>
            </Card>
          </CardContainer>
        )}
      </Spring>
    );
  }
}

const DragCardWithGesture = withGesture(DragCard);
export { DragCardWithGesture as DragCard };

const CardContainer = styled(animated.div)`
  z-index: 10000;
  position: relative;
  width: 300px;
  height: 200px;
  margin: 0 auto;
`;

const Card = styled(animated.div)`
  z-index: 10000;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  cursor: pointer;
`;
