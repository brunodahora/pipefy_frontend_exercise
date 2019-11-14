import * as React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import faker from 'faker';

import store from '../../store';
import Field from '../Field';

import { ShortTextField } from '../__fixtures__';

const renderWithReduxProvider = component =>
  render(<Provider store={store}>{component}</Provider>);

describe('<Field />', () => {
  it('renders ShortTextField correctly', () => {
    const { container } = renderWithReduxProvider(
      <Field field={ShortTextField} />
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <label
        class="pp-input-wrap pp-input-md"
      >
        <b
          class="pp-label-text"
        >
          Your name
        </b>
        <input
          class="pp-input"
          id="your_name"
          label="Your name"
          tabindex="0"
          type="text"
          value=""
        />
      </label>
    `);
  });

  it('renders ShortTextField correctly', () => {
    const { getByLabelText } = renderWithReduxProvider(
      <Field field={ShortTextField} />
    );
    const input = getByLabelText(ShortTextField.label);
    const value = faker.name.findName();
    fireEvent.change(input, { target: { value } });
    expect(input.value).toEqual(value);
  });
});
