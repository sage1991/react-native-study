import React, { FC } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ApplicationRouter } from "./ApplicationRouter";


export const App: FC = () => {
  return (
    <Provider store={store}>
      <ApplicationRouter />
    </Provider>
  )
}
