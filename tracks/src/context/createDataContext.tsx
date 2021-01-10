import React, { createContext, Dispatch, FC, Reducer, useMemo, useReducer } from "react";



export interface DataContext<S, A, T extends ActionBuilder<A>> {
  state: S;
  actions: T;
}

export interface ActionBuilderConstructor<A, P extends ActionBuilder<A>> {
  new (dispatch: Dispatch<A>): P;
}

export interface ActionBuilder<T> {
  dispatch: Dispatch<T>;
}

export const createDataContext = <S, A, T extends ActionBuilder<A>> (reducer: Reducer<S, A>, ActionBuilder: ActionBuilderConstructor<A, T>, initialState: S) => {
  const Context = createContext<DataContext<S, A, T>>(null as any);

  const Provider: FC = ({ children }) => {
    const [ state, dispatch ] = useReducer<Reducer<S, A>>(reducer, initialState);
    const actions: T = useMemo(() => new ActionBuilder(dispatch), [ dispatch ]);

    return (
      <Context.Provider value={{ state: state, actions: actions }}>
        { children }
      </Context.Provider>
    )
  }

  return { Context, Provider };
};