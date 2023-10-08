import React, { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';

export default function CustomInput({label, id, onChange, value, customStyle}) {
//   const [value, setValue] = useState('');

  return (
    <MDBInput
      value={value}
      onChange={onChange}
      label={label}
      id={id}
      type='text'
      style={customStyle}
    />
  );
}