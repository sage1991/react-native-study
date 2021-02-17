import { SelectLibraryAction } from "../reducers/SelectionReducer";


export const selectLibrary = (id: number): SelectLibraryAction => ({ type: "SELECT_LIBRARY", payload: id });
