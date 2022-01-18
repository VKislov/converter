import { connect } from "react-redux";
import {
  onFileChangeAC,
  sendImageToServerTC,
} from "../../redux/fileUploaderReducer";
import { FileUploader } from "./FileUploader";

const mapStateToProps = (state, ownProps) => {
  return {
    togglePreviewer: ownProps.togglePreviewer,
    setImageIsGet: ownProps.setImageIsGet,
    imageIsGet: ownProps.imageIsGet,
    imageFile: state.fileUploaderReducer.imageFile,
    extensionTo: state.fileUploaderReducer.extensionTo,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onFileChange: (userFile) => dispatch(onFileChangeAC(userFile)),
  sendImageToServerTC: (imageFile, extensionTo) => {
    dispatch(sendImageToServerTC(imageFile, extensionTo));
  },
});

const FileUploaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUploader);
export { FileUploaderContainer };
