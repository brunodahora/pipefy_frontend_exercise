import * as React from 'react';
import { Radio } from 'pipestyle';

const RadioVerticalField = ({ value, onChange, options, ...otherProps }) =>
  options.map(option => (
    <Radio
      {...otherProps}
      key={option}
      name={option}
      value={option}
      label={option}
      onChange={onChange}
      checked={value ? value === option : undefined}
    />
  ));
export default RadioVerticalField;
