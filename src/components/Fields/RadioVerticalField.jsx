import * as React from 'react';
import { Radio } from 'pipestyle';

const RadioVerticalField = ({ value, onChange, options, ...otherProps }) =>
  options.map(option => (
    <Radio
      {...otherProps}
      id={option}
      key={option}
      name={option}
      value={option}
      label={option}
      onChange={({ target: { value } }) => onChange(value)}
      checked={value === option}
    />
  ));
export default RadioVerticalField;
