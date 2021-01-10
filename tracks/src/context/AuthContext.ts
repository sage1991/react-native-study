import { ActionBuilder, createDataContext } from "./createDataContext";
import { Dispatch, Reducer } from "react";
import { tracker } from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Key } from "../persistence/Key";
import { navigate } from "../navigationRef";


type AuthActions = SigninAction | SignoutAction | ErrorAction;

interface SigninAction {
  type: AuthAction.SIGN_IN;
  payload: string;
}

interface SignoutAction {
  type: AuthAction.SIGN_OUT;
}

interface ErrorAction {
  type: AuthAction.ERROR;
  payload: string;
}

export enum AuthAction {
  SIGN_IN = "/AuthAction/SIGN_IN",
  SIGN_OUT = "/AuthAction/SIGN_OUT",
  ERROR = "/AuthAction/ERROR",
}

type AuthState = {
  token: string | null;
  error: string;
}

const reducer: Reducer<AuthState, AuthActions> = (state, action) => {
  switch (action.type) {
    case AuthAction.SIGN_IN:
      return { token: action.payload, error: "" };
    case AuthAction.SIGN_OUT:
      return { token: null, error: "" };
    case AuthAction.ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

type Auth = { email: string, password: string };

class AuthActionBuilder implements ActionBuilder<AuthActions> {
  constructor(public dispatch: Dispatch<AuthActions>) {}

  signup = async (auth: Auth) => {
    try {
      const response = await tracker.post("/signup", auth);
      await AsyncStorage.setItem(Key.TOKEN, response.data.token);
      this.dispatch({ type: AuthAction.SIGN_IN, payload: response.data.token });
      navigate("TrackList");
    } catch (e) {
      this.dispatch({ type: AuthAction.ERROR, payload: "Oops... something went wrong with sign up." });
    }
  }

  signin = async (auth: Auth) => {
    try {
      const response = await tracker.post("/signin", auth);
      await AsyncStorage.setItem(Key.TOKEN, response.data.token);
      this.dispatch({ type: AuthAction.SIGN_IN, payload: response.data.token });
      navigate("TrackList");
    } catch (e) {
      this.dispatch({ type: AuthAction.ERROR, payload: "Oops... something went wrong with sign in." });
    }
  }

  tryLocalSignin = async () => {
    const token = await AsyncStorage.getItem(Key.TOKEN);

    if (token) {
      this.dispatch({ type: AuthAction.SIGN_IN, payload: token });
      navigate("TrackList");
      return;
    }

    navigate("Signup");
  }

  signout = async () => {
    await AsyncStorage.removeItem(Key.TOKEN);
    this.dispatch({ type: AuthAction.SIGN_OUT });
    navigate("loginFlow");
  }

  clearError = () => this.dispatch({ type: AuthAction.ERROR, payload: "" });
}

const { Context, Provider } = createDataContext(reducer, AuthActionBuilder, { token: null, error: "" });
export { Context as AuthContext, Provider as AuthProvider };