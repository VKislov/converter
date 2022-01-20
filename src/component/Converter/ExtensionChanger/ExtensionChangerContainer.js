import { connect } from "react-redux";
import {
  changeExtensionInStoreAC,
  getExtFromServerTC,
} from "../../../redux/fileUploaderReducer";

import { ExtensionChanger } from "./ExtensionChanger";
const mapStateToProps = (state) => {
  return {
    extensions: state.fileUploaderReducer.extensions,
    extensionsFromServer: state.fileUploaderReducer.extensionsFromServer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeExtensionInStore: (ext) => dispatch(changeExtensionInStoreAC(ext)),
    loadExt: () => dispatch(getExtFromServerTC()),
  };
};
const ExtensionChangerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExtensionChanger);
export { ExtensionChangerContainer };
