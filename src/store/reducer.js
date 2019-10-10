import { UPDATE_FIELD, SHOW_SUCCESS_PAGE } from './actionTypes';

const INITIAL_STATE = {
  fields: {},
  showSuccessPage: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        fields: {
          ...state.fields,
          [action.id]: action.value,
        },
      };
    case SHOW_SUCCESS_PAGE:
      return {
        ...state,
        showSuccessPage: true,
      };
    default:
      return state;
  }
};
export default reducer;
