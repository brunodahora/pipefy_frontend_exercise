import * as React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import faker from 'faker';

import store from '../../store';
import Form from '../Form';

import { ShortTextField } from '../../__fixtures__';

const renderWithProvider = component =>
  render(<Provider store={store}>{component}</Provider>);

describe('<Form />', () => {
  it('render without fields', () => {
    const { queryAllByTestId } = renderWithProvider(
      <Form
        formFields={[]}
        submitButtonText={faker.random.word()}
        submitPublicForm={jest.fn()}
      />
    );
    expect(queryAllByTestId('field')).toEqual([]);
  });

  it('render with ShortTextField', () => {
    const { getByLabelText } = renderWithProvider(
      <Form
        formFields={[ShortTextField]}
        submitButtonText={faker.random.word()}
        submitPublicForm={jest.fn()}
      />
    );
    expect(getByLabelText(ShortTextField.label)).not.toBeNull();
  });
});
