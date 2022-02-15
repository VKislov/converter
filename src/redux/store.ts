import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./authReducer/authReducer";
import { fileUploaderReducer } from "./fileUploaderReducer/fileUploaderReducer";
import { imageHistoryReducer } from "./imageHistoryReducer/imageHistoryReducer";

const reducers = combineReducers({
  fileUploaderReducer: fileUploaderReducer,
  authReducer: authReducer,
  imageHistoryReducer: imageHistoryReducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
export { store };

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch