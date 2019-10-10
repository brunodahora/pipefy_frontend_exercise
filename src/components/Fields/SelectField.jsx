import * as React from 'react';
import { Select, Option } from 'pipestyle';

const SelectField = ({ value, onChange, options, ...otherProps }) => (
  <Select
    value={value}
    onChange={({ target: { value } }) => onChange(value)}
    {...otherProps}
  >
    {options.map(option => (
      <Option key={option} value={option}>
        {option}
      </Option>
    ))}
  </Select>
);
export default SelectField;
