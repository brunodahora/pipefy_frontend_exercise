import * as React from 'react';
import { Title, Form } from '../components';

const Main = ({
  data: { publicFormSettings, formFields },
  submitPublicForm,
}) => {
  return (
    <div className="container">
      <Title publicFormSettings={publicFormSettings} />
      <Form
        formFields={formFields}
        submitButtonText={publicFormSettings.submitButtonText}
      />
    </div>
  );
};

export default Main;
