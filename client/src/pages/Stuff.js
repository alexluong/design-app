import React from 'react';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring';

import { Color, Modal, Toggle, Typography, LinkButton, IconButton } from 'lib';

class Stuff extends React.Component {
  render() {
    const message = 'Hello from the other sidee';
    return (
      <div>
        <LinkButton color="primary" tag={Link} to="/sign-out">
          Clickk
        </LinkButton>

        <IconButton name="close" />
        <Typography tag="h1" color="secondary">
          Hi theree
        </Typography>
        <Link to="/facebook">Facebook</Link>
        <Toggle>
          {({ on, toggle, close }) => (
            <React.Fragment>
              <button onClick={toggle}>Click me</button>
              <Modal isOpen={on} closeModal={close}>
                <h1>{message}</h1>
              </Modal>
            </React.Fragment>
          )}
        </Toggle>

        <Toggle>
          {({ on, toggle }) => (
            <Spring
              from={{ height: '200px' }}
              to={{ height: on ? '500px' : '200px' }}
              toggle={toggle}
              children={Content}
            />
          )}
        </Toggle>

        <h1>Hi</h1>
      </div>
    );
  }
}

const Content = ({ height, toggle }) => {
  return (
    <div
      style={{ height, backgroundColor: new Color('primary').get() }}
      onClick={toggle}
    />
  );
};

export default Stuff;
