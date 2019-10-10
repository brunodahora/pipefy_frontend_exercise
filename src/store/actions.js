import { UPDATE_FIELD, SHOW_SUCCESS_PAGE } from './actionTypes';

export const updateField = (id, value) => ({
  type: UPDATE_FIELD,
  id,
  value,
});
export const showSuccessPage = () => ({
  type: SHOW_SUCCESS_PAGE,
});
