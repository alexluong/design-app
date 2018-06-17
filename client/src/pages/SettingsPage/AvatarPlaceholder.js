import React from 'react';
import styled from 'styled-components';

import { position } from 'config/theme';
import avatarPlaceholder from 'assets/avatar-placeholder.png';

const AvatarPlaceholder = props => (
  <Container {...props}>
    <img src={avatarPlaceholder} alt="avatar placeholder" />
    <Overlay>Upload Photo</Overlay>
  </Container>
);

export default AvatarPlaceholder;

const Container = styled.div`
  position: relative;

  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
  }
  &:hover {
    div {
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

const Overlay = styled.div`
  ${position('absolute')};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  visibility: hidden;
  transform: translateY(100%);
  transition: all 0.15s ease-in-out;

  ${position('centerChildren')};
  padding: 1rem;
  color: white;
  text-align: center;
`;
