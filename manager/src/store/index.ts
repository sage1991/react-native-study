import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducers";
import ReduxThunk from "redux-thunk";


const middleware = applyMiddleware(ReduxThunk);

export const store = createStore(reducer, middleware);
