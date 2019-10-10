import * as React from 'react';
import { Checkbox } from 'pipestyle';

const CheckboxVerticalField = ({ value, onChange, options, ...otherProps }) =>
  options.map(option => (
    <Checkbox
      {...otherProps}
      id={option}
      key={option}
      name={option}
      value={option}
      label={option}
      onChange={onChange}
      checked={value ? value === option : undefined}
    />
  ));
export default CheckboxVerticalField;
