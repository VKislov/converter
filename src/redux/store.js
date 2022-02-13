import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./authReducer/authReducer";
import { fileUploaderReducer } from "./fileUploaderReducer/fileUploaderReducer";
import { imageHistoryReducer } from "./imageHistoryReducer/imageHistoryReducer";

let reducers = combineReducers({
  fileUploaderReducer: fileUploaderReducer,
  authReducer: authReducer,
  imageHistoryReducer: imageHistoryReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
export { store };
