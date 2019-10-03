import { UPDATE_FIELD } from './actionTypes';

const INITIAL_STATE = {
  fields: { }
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return { 
        fields: { 
          ...state.fields,
          [action.id]: action.value,
        }
      };  
    default:
      return state;  
  }
}
export default reducer;