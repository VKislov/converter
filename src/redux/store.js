import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./authReducer";
import { fileUploaderReducer } from "./fileUploaderReducer";

let reducers = combineReducers({
  fileUploaderReducer: fileUploaderReducer,
  authReducer: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
export { store };
window.store = store;
