import React from 'react';
import styled from 'styled-components';

const BlockComponent = props => <StyledBlock {...props} />;
const blockType = 'block';
const blockStyles = `width: 10rem;
height: 10rem;
background-color: white;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;`;

export { BlockComponent, blockType, blockStyles };

const StyledBlock = styled.div`
  ${blockStyles};
  ${props => {
    const { width, height } = props;
    if (width && height) {
      return `
        width: ${width}px;
        height: ${height}px;
      `;
    }
  }};
`;
