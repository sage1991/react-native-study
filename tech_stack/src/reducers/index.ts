import { combineReducers } from "redux";
import { LibraryReducer, LibraryState } from "./LibraryReducer";
import { SelectionReducer, SelectionState } from "./SelectionReducer";


export interface StoreState {
  libraries: LibraryState[];
  selection: SelectionState;
}

export const reducer = combineReducers<StoreState>({
  libraries: LibraryReducer,
  selection: SelectionReducer,
})
