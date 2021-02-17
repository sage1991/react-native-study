import React, { FC } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducers";
import { Header } from "./components/common";
import { LibraryList } from "./components/LibraryList";

export const App: FC = () => {
  return (
    <Provider store={createStore(reducer)}>
      <>
        <Header>Tech Stack</Header>
        <LibraryList />
      </>
    </Provider>
  );
}
