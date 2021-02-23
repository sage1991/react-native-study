import { EmployeeFormActionType, UpdateEmployeeFormRequest } from "../actions";
import { Shift } from "../model/Shift";


export type EmployeeFormAction = UpdateEmployeeFormAction | ClearFormAction | InitFormAction;

export interface UpdateEmployeeFormAction {
  type: EmployeeFormActionType.UPDATE_FORM;
  payload: UpdateEmployeeFormRequest<keyof EmployeeFormState>;
}

export interface ClearFormAction {
  type: EmployeeFormActionType.CLEAR_FORM;
}

export interface InitFormAction {
  type: EmployeeFormActionType.INIT_FORM;
  payload: EmployeeFormState;
}

export interface EmployeeFormState {
  name: string;
  phone: string;
  shift: Shift | "";
}


const INIT_STATE: EmployeeFormState = {
  name: "",
  phone: "",
  shift: ""
};

export const EmployeeFormReducer = (state = INIT_STATE, action: EmployeeFormAction): EmployeeFormState => {
  switch (action.type) {
    case EmployeeFormActionType.UPDATE_FORM:
      const { prop, value } = action.payload;
      return { ...state, [prop]: value };
    case EmployeeFormActionType.CLEAR_FORM:
      return INIT_STATE;
    case EmployeeFormActionType.INIT_FORM:
      return { ...action.payload };
    default:
      return state;
  }
}
