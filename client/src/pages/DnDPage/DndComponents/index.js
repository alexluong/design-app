import React from 'react';

import { BlockComponent } from './BlockComponent';
import { ButtonComponent } from './ButtonComponent';

const DnDComponent = ({ type, ...props }) => {
  switch (type) {
    case 'block':
      return <BlockComponent {...props} />;
    case 'button':
      return <ButtonComponent {...props} />;
    default:
      return <BlockComponent {...props} />;
  }
};

export default DnDComponent;
