import React from 'react';

import { BlockComponent } from './BlockComponent';
import { ButtonComponent } from './ButtonComponent';
import { InputComponent } from './InputComponent';

const DnDComponent = ({ type, ...props }) => {
  switch (type) {
    case 'block':
      return <BlockComponent {...props} />;
    case 'button':
      return <ButtonComponent {...props} />;
    case 'input':
      return <InputComponent {...props} />;
    default:
      return <BlockComponent {...props} />;
  }
};

export default DnDComponent;
