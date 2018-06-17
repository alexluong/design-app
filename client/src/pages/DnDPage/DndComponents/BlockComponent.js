import React from 'react';
import styled from 'styled-components';

import { position } from 'config/theme';

const BlockComponent = props => <StyledBlock {...props} />;

export { BlockComponent };

const StyledBlock = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: white;
  cursor: pointer;
  ${position('centerChildren')};
`;
