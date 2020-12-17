import React, { FC, useReducer } from "react";


type Reducer<S, A> = (state: S, action: A) => S;
type Dispatch<A> = (action: A) => void;

export interface ActionBuilder<A> {
  dispatch: Dispatch<A>;
}

interface Constructable<T, A> {
  new (dispatch: Dispatch<A>): T;
}

interface DataContext<S, A, T> {
  state: S;
  dispatch: Dispatch<A>;
  actions: T;
}

export const createDataContext = <S, A, T extends ActionBuilder<A>> (reducer: Reducer<S, A>, initState: S, ActionBuilder: Constructable<T, A>): [ React.Context<DataContext<S, A, T>>, FC ] => {
  const Context = React.createContext<DataContext<S, A, T>>({
    state: initState,
    dispatch: (action: A) => {},
    actions: {} as T
  });

  const Provider: FC = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, initState);
    const actions = new ActionBuilder(dispatch);

    return (
      <Context.Provider value={{ state, dispatch, actions }}>
        { children }
      </Context.Provider>
    );
  }

  return [ Context, Provider ];
}