import * as React from 'react';
import { BaseField } from 'pipestyle';

import * as Fields from './Fields';

const getField = ({ __typename, value, onChange, ...otherProps }) =>
  Fields[__typename] ? (
    React.createElement(Fields[__typename], { value, onChange, ...otherProps })
  ) : (
    <div>{__typename}</div>
  );

const Field = ({ field }) => {
  return <BaseField label={field.label}>{getField({ ...field })}</BaseField>;
};
export default Field;
