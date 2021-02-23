import { EmployeeFormActionType } from "./types";
import {
  ClearFormAction,
  EmployeeFormAction,
  EmployeeFormState,
  InitFormAction,
  UpdateEmployeeFormAction
} from "../reducers/EmployeeFormReducer";
import { Dispatch } from "redux";
import firebase from "firebase";
import { StoreState } from "../reducers";
import { Actions } from "react-native-router-flux";
import { Employee } from "../reducers/EmployeeReducer";


export interface UpdateEmployeeFormRequest<T extends keyof EmployeeFormState> {
  prop: T;
  value: EmployeeFormState[T];
}

export const updateForm = <T extends keyof EmployeeFormState> (request: UpdateEmployeeFormRequest<T>): UpdateEmployeeFormAction => {
  return {
    type: EmployeeFormActionType.UPDATE_FORM,
    payload: request
  }
}


export const createEmployee = (form: EmployeeFormState) => async (dispatch: Dispatch<EmployeeFormAction>, getState: () => StoreState) => {
  const { auth: { user } } = getState();

  try {
    await firebase
      .database()
      .ref(`/users/${user!.uid}/employees`)
      .push(form);
    dispatch({ type: EmployeeFormActionType.CLEAR_FORM });
    Actions.pop();
  } catch (e) {
    console.log(e);
  }
}


export const updateEmployee = (employee: Employee) => async (dispatch: Dispatch<EmployeeFormAction>, getState: () => StoreState) => {
  const { auth: { user } } = getState();
  const { id, ...payload } = employee;

  try {
    await firebase
      .database()
      .ref(`/users/${user!.uid}/employees/${id}`)
      .set(payload);
    dispatch({ type: EmployeeFormActionType.CLEAR_FORM });
    Actions.pop();
  } catch (e) {
    console.log(e);
  }
}


export const deleteEmployee = (id: string) => async (dispatch: Dispatch<EmployeeFormAction>, getState: () => StoreState) => {
  const { auth: { user } } = getState();

  try {
    await firebase
      .database()
      .ref(`/users/${user!.uid}/employees/${id}`)
      .remove();
    dispatch({ type: EmployeeFormActionType.CLEAR_FORM });
    Actions.pop();
  } catch (e) {
    console.log(e);
  }
}


export const initForm = (employee: Employee): InitFormAction => {
  const { id, ...form } = employee;
  return {
    type: EmployeeFormActionType.INIT_FORM,
    payload: form
  }
}


export const clearForm = (): ClearFormAction => {
  return { type: EmployeeFormActionType.CLEAR_FORM };
}
