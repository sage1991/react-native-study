import { AuthActionType } from "../actions";
import firebase from "firebase";


export type AuthAction = ChangePasswordAction | ChangeEmailAction | LoginUserAction
                        | LoginFailAction | SetLoadingAction;

export interface ChangePasswordAction {
  type: AuthActionType.CHANGE_PASSWORD;
  payload: string;
}

export interface ChangeEmailAction {
  type: AuthActionType.CHANGE_EMAIL;
  payload: string;
}

export interface LoginUserAction {
  type: AuthActionType.LOGIN_USER;
  payload: firebase.User;
}

export interface LoginFailAction {
  type: AuthActionType.LOGIN_FAIL;
  payload?: string;
}

export interface SetLoadingAction {
  type: AuthActionType.SET_LOADING;
  payload: boolean;
}

export interface AuthState {
  email: string;
  password: string;
  user: firebase.User | null;
  error: string;
  loading: boolean;
}

const INITIAL_STATE: AuthState = {
  email: "",
  password: "",
  user: null,
  error: "",
  loading: false,
}

export const AuthReducer = (state = INITIAL_STATE, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionType.CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case AuthActionType.CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case AuthActionType.LOGIN_USER:
      return { ...state, user: action.payload, error: "" };
    case AuthActionType.LOGIN_FAIL:
      return { ...state, error: action.payload ? action.payload : "Authentication Failed." };
    case AuthActionType.SET_LOADING:
      return { ...state, loading: action.payload, error: "" };
    default:
      return state;
  }
}
