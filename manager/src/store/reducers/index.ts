import { combineReducers, Reducer } from "redux";
import { AuthReducer, AuthState } from "./AuthReducer";
import { EmployeeFormReducer, EmployeeFormState } from "./EmployeeFormReducer";
import { EmployeeReducer, EmployeeState } from "./EmployeeReducer";


export interface StoreState {
  auth: AuthState;
  form: EmployeeFormState;
  employees: EmployeeState;
}

export const reducer: Reducer<StoreState> = combineReducers<StoreState>({
  auth: AuthReducer,
  form: EmployeeFormReducer,
  employees: EmployeeReducer,
});
