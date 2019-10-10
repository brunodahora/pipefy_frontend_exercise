import * as React from 'react';
import { TextField } from 'pipestyle';

const ShortTextField = ({ onChange, ...otherProps }) => (
  <TextField
    onChange={({ target: { value } }) => onChange(value)}
    {...otherProps}
  />
);

export default ShortTextField;
