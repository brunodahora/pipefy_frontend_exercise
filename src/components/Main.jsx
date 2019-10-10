import * as React from 'react';
import { useSelector } from 'react-redux';
import { Title, Form } from '../components';

const Main = ({
  data: { publicFormSettings, formFields },
  submitPublicForm,
}) => {
  const showSuccessPage = useSelector(state => state.showSuccessPage);
  return (
    <div className="container">
      <Title publicFormSettings={publicFormSettings} />
      {!showSuccessPage && (
        <Form
          formFields={formFields}
          submitButtonText={publicFormSettings.submitButtonText}
          submitPublicForm={submitPublicForm}
        />
      )}
      {showSuccessPage && (
        <div className="box fields">
          <h2>Congratulations your card was created</h2>
        </div>
      )}
    </div>
  );
};

export default Main;
