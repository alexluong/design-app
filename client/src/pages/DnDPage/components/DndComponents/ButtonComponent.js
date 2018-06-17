import React from 'react';
import styled from 'styled-components';

const ButtonComponent = props => <StyledButton {...props}>Button</StyledButton>;

export { ButtonComponent };

const StyledButton = styled.button`
  display: inline-block;
`;
