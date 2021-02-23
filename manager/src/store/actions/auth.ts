import { AuthAction, ChangeEmailAction, ChangePasswordAction } from "../reducers/AuthReducer";
import { AuthActionType } from "./types";
import firebase from "firebase";
import { Dispatch } from "redux";
import { Actions } from "react-native-router-flux";


export const changeEmail = (email: string): ChangeEmailAction => {
  return {
    type: AuthActionType.CHANGE_EMAIL,
    payload: email
  }
}

export const changePassword = (password: string): ChangePasswordAction => {
  return {
    type: AuthActionType.CHANGE_PASSWORD,
    payload: password
  }
}


export interface LoginRequest {
  email: string;
  password: string;
}

export const login = ({ email, password }: LoginRequest) => async (dispatch: Dispatch<AuthAction>) => {
  dispatch({ type: AuthActionType.SET_LOADING, payload: true });

  try {
    const credential = await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch({ type: AuthActionType.LOGIN_USER, payload: credential.user! });
    dispatch({ type: AuthActionType.SET_LOADING, payload: false });
    Actions.main();
    return;
  } catch (e) {
    console.log(e);
  }

  try {
    const credential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    dispatch({ type: AuthActionType.LOGIN_USER, payload: credential.user! });
    dispatch({ type: AuthActionType.SET_LOADING, payload: false });
    Actions.employees();
    return;
  } catch (e) {
    console.log(e);
  }

  dispatch({ type: AuthActionType.LOGIN_FAIL });
  dispatch({ type: AuthActionType.SET_LOADING, payload: false });
}
