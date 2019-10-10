import * as React from 'react';
import { Textarea } from 'pipestyle';

const LongTextField = ({ onChange, ...otherProps }) => (
  <Textarea
    onChange={({ target: { value } }) => onChange(value)}
    {...otherProps}
  />
);

export default LongTextField;
