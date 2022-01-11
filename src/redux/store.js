import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

let reducers = {};

let store = createStore(reducers, applyMiddleware(thunk));
export { store };
