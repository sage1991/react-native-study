import { Reducer } from "redux";
import libraries from "./libraries.json";


export interface LibraryState {
  id: number;
  title: string;
  description: string;
}

export const LibraryReducer: Reducer = (state: LibraryState[], action) => {
  return libraries;
}
