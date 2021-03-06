import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_EDIT,
  EMPLOYEE_EDIT_SAVE_SUCCESS,
  EMPLOYEE_FORM_CREATE_INIT
} from "./types";

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop();
      });
  };
};

export const employeeFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on("value", snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeEdit = ({ name, phone, shift, uid }) => {
  return {
    type: EMPLOYEE_EDIT,
    payload: { name, phone, shift, uid }
  };
};

export const employeeEditSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .update({ name, phone, shift })
      .then(() => {
        dispatch({
          type: EMPLOYEE_EDIT_SAVE_SUCCESS
        });
        Actions.pop();
      });
  };
};

export const employeeCreateInit = () => {
  return { type: EMPLOYEE_FORM_CREATE_INIT };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.pop();
      });
  };
};
