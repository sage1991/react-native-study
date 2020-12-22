import React, { FC, useMemo, useReducer } from "react";


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
  actions: T;
}

export const createDataContext = <S, A, T extends ActionBuilder<A>> (reducer: Reducer<S, A>, ActionBuilder: Constructable<T, A>, initState?: S): [ React.Context<DataContext<S, A, T>>, FC ] => {
  const Context = React.createContext<DataContext<S, A, T>>({
    state: initState!,
    actions: {} as T
  });

  const Provider: FC = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, initState!);
    const actions = useMemo(() => new ActionBuilder(dispatch), [ dispatch ]);

    return (
      <Context.Provider value={{ state, actions }}>
        { children }
      </Context.Provider>
    );
  }

  return [ Context, Provider ];
}