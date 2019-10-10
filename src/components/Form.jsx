import * as React from 'react';
import { Button } from 'pipestyle';

import Field from './Field';

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
