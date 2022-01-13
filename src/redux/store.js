import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { fileUploaderReducer } from "./fileUploaderReducer";

let reducers = combineReducers({ fileUploaderReducer: fileUploaderReducer });

let store = createStore(reducers, applyMiddleware(thunk));
export { store };
window.store = store;
