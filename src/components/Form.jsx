import * as React from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { BaseField, Button, TextField, Textarea } from 'pipestyle';

import { updateField } from '../store/actions';

import * as Fields from './Fields';

const getField = ({ __typename, value, onChange, ...otherProps }) =>
  Fields[__typename] ? (
    React.createElement(Fields[__typename], { value, onChange, ...otherProps })
  ) : (
    <div>{__typename}</div>
  );

const Field = ({ field }) => {
  const selectFieldValue = state => state.fields[field.id] || '';
  const value = useSelector(selectFieldValue, shallowEqual);
  const dispatch = useDispatch();
  const onChange = ({ target: { value } }) =>
    dispatch(updateField(field.id, value));
  return (
    <BaseField label={field.label}>
      {getField({ ...field, value, onChange })}
    </BaseField>
  );
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
