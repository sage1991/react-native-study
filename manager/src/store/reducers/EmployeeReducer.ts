import { EmployeeActionType } from "../actions";
import { Shift } from "../model/Shift";


export type EmployeeAction = SetEmployeeAction;

export interface SetEmployeeAction {
  type: EmployeeActionType.SET_EMPLOYEES;
  payload: Employee[];
}

export interface Employee {
  id: string;
  name: string;
  phone: string;
  shift: Shift;
}

export type EmployeeState = Employee[];


const INIT_STATE: EmployeeState = [];

export const EmployeeReducer = (state = INIT_STATE, action: EmployeeAction) => {
  switch (action.type) {
    case EmployeeActionType.SET_EMPLOYEES:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
