import * as React from 'react';
import { BaseField, TextField, Textarea } from 'pipestyle';

const Fields = {
  ShortTextField: TextField,
  LongTextField: Textarea,
};
// SelectField
// RadioVerticalField
// ChecklistVerticalField
// DateField

const getField = ({ __typename }) =>
  Fields[__typename] ? (
    React.createElement(Fields[__typename])
  ) : (
    <div>{__typename}</div>
  );

const Form = ({ formFields }) => {
  return (
    <div className="box fields">
      {formFields.map(field => (
        <BaseField label={field.label}>{getField(field)}</BaseField>
      ))}
    </div>
  );
};
export default Form;
