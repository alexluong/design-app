import React from 'react';

import { TextInput } from 'lib';

const renderInputField = field => {
  const { input, type, placeholder, label, required } = field;
  const { onFocus } = input;

  return (
    <TextInput
      {...input}
      type={type}
      placeholder={placeholder}
      label={label}
      onFocus={onFocus}
      required={required}
    />
  );
};

export default renderInputField;
