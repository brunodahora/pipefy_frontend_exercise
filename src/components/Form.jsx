import * as React from 'react';
import { BaseField, Button } from 'pipestyle';

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

const Form = ({ formFields, submitButtonText }) => {
  return (
    <div className="box fields">
      {formFields.map(field => (
        <Field key={field.id} field={field} />
      ))}
      <Button onClick={() => console.log('click')}>{submitButtonText}</Button>
    </div>
  );
};
export default Form;
