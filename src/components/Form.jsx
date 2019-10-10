import * as React from 'react';
import { Button } from 'pipestyle';
import { useSelector, useDispatch } from 'react-redux';

import { showSuccessPage } from '../store/actions';

import Field from './Field';

const getFilledFields = fields => {
  return Object.keys(fields).map(fieldId => ({
    fieldId,
    fieldValue: fields[fieldId],
  }));
};

const Form = ({ formFields, submitButtonText, submitPublicForm }) => {
  const dispatch = useDispatch();
  const selectFields = state => state.fields;
  const fields = useSelector(selectFields);
  const filledFields = getFilledFields(fields);
  const onClick = () =>
    submitPublicForm({
      variables: {
        filledFields,
      },
    })
      .then(result => {
        if (result.data && result.data.submitPublicForm.repoItem) {
          dispatch(showSuccessPage());
        } else {
          alert('Error');
        }
      })
      .catch(error => {
        alert(error.message);
      });

  return (
    <div className="box fields">
      {formFields.map(field => (
        <Field key={field.id} field={field} />
      ))}
      <Button onClick={onClick}>{submitButtonText}</Button>
    </div>
  );
};
export default Form;
