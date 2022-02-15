import { connect } from "react-redux";
import App from "./App";
import { loadExtAC } from "./redux/fileUploaderReducer/fileUploaderActions";
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadExt: () => dispatch(loadExtAC()),
  };
};
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export { AppContainer };
