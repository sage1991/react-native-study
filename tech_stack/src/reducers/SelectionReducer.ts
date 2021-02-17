import { Reducer } from "redux";

// state
export type SelectionState = null | number;

// action
export type SelectionAction = SelectLibraryAction;

export interface SelectLibraryAction {
  type: "SELECT_LIBRARY",
  payload: number;
}

export const SelectionReducer: Reducer<SelectionState, SelectionAction> = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "SELECT_LIBRARY":
      return action.payload;
    default:
      return null;
  }
}
