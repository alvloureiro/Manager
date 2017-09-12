import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_EDIT,
  EMPLOYEE_EDIT_SAVE_SUCCESS,
  EMPLOYEE_FORM_CREATE_INIT,
  EMPLOYEE_DELETE
} from "../actions/types";

const INITIAL_STATE = {
  name: "",
  phone: "",
  shift: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_EDIT:
      return {
        ...state,
        name: action.payload.name,
        phone: action.payload.phone,
        shift: action.payload.shift,
        uid: action.payload.uid
      };
    case EMPLOYEE_EDIT_SAVE_SUCCESS:
      return INITIAL_STATE;
    case EMPLOYEE_FORM_CREATE_INIT:
      return INITIAL_STATE;
    case EMPLOYEE_DELETE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
