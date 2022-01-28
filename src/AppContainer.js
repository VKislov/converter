import { connect } from "react-redux";
import App from "./App";
import { checkAuth } from "./redux/authReducer";
import { loadExtAC } from "./redux/fileUploaderReducer";
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadExt: () => dispatch(loadExtAC()),
    checkAuth: () => dispatch(checkAuth()),
  };
};
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export { AppContainer };
