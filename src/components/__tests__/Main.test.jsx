import * as React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import faker from 'faker';

import store from '../../store';
import Main from '../Main';

import { ShortTextField, data } from '../../__fixtures__';

const renderWithProvider = component =>
  render(<Provider store={store}>{component}</Provider>);

const wait = (amount = 0) =>
  new Promise(resolve => setTimeout(resolve, amount));

describe('<Main />', () => {
  it('submit a complete form and shows the success page', async () => {
    const submitPublicForm = jest
      .fn()
      .mockResolvedValue({ data: { submitPublicForm: { repoItem: '1' } } });
    const { getByLabelText, getByText } = renderWithProvider(
      <Main
        data={{
          formFields: [ShortTextField],
          publicFormSettings: data.publicForm.publicFormSettings,
        }}
        submitPublicForm={submitPublicForm}
      />
    );
    const value = faker.name.findName();
    fireEvent.change(getByLabelText(ShortTextField.label), {
      target: { value },
    });
    fireEvent.click(
      getByText(data.publicForm.publicFormSettings.submitButtonText)
    );
    expect(submitPublicForm).toHaveBeenCalledWith({
      variables: {
        filledFields: [
          {
            fieldId: ShortTextField.id,
            fieldValue: value,
          },
        ],
      },
    });
    await wait();
    expect(getByText('Congratulations your card was created')).not.toBeNull();
  });
});
