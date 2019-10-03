import { UPDATE_FIELD } from './actionTypes';

export const updateField = (id, value) => ({
  type: UPDATE_FIELD,
  id,
  value
})