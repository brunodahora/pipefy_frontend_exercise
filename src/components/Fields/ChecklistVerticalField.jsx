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
      onChange={({ target: { value: selected } }) => {
        let newValue = value || [];
        if (newValue.includes(selected)) {
          newValue = value.filter(item => item !== selected);
        } else {
          newValue.push(selected);
        }
        onChange(newValue);
      }}
      checked={value && value.includes(option)}
    />
  ));
export default CheckboxVerticalField;
