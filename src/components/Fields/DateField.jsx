import * as React from 'react';
import moment from 'moment-timezone';
import { TextField, DatePicker, Trigger } from 'pipestyle';

const isEmpty = value => !value || value === '';

const DateField = ({ value, onChange }) => (
  <Trigger
    trigger="click"
    element={
      <DatePicker
        dateLabel="Date"
        clearButtonLabel="Limpar"
        value={value ? moment(value) : undefined}
        showClearButton
        locale="pt-BR"
        timezone="America/Sao_Paulo"
        onChange={date => {
          if (date) {
            onChange(date.toISOString());
          } else {
            onChange('');
          }
        }}
      />
    }
    placement="bottom"
    tetherProps={{ offset: '0px -45px' }}
  >
    <TextField
      value={!isEmpty(value) ? moment(value).format('DD/MM/YYYY') : ''}
      placeholder="99/99/9999"
    />
  </Trigger>
);

export default DateField;
