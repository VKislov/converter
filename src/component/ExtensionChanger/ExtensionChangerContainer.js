import { connect } from "react-redux";
import { onExtensionChangeAC } from "../../redux/fileUploaderReducer";
import { ExtensionChanger } from "./ExtensionChanger";
const mapStateToProps = (state) => {};
const mapDispatchToProps = (dispatch) => {
  return {
    onExtensionChange: (ext) => {
      dispatch(onExtensionChangeAC(ext));
    },
  };
};
const ExtensionChangerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExtensionChanger);
export { ExtensionChangerContainer };