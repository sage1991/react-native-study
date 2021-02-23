import { Dispatch } from "redux";
import firebase from "firebase";
import { StoreState } from "../reducers";
import { EmployeeActionType } from "./types";
import _ from "lodash";
import { Employee } from "../reducers/EmployeeReducer";


export const fetchEmployees = () => (dispatch: Dispatch, getState: () => StoreState) => {
  const { auth: { user } } = getState();

  firebase
    .database()
    .ref(`/users/${user!.uid}/employees`)
    .on("value", (snapshot) => {
      const employees = _.map<any, Employee>(snapshot.val(), (value, id) => ({ ...value, id }));
      dispatch({ type: EmployeeActionType.SET_EMPLOYEES, payload: employees });
    });
}
