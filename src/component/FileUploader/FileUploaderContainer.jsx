import { connect } from "react-redux";
import {
  onFileChangeAC,
  onFileUploadAC,
} from "../../redux/fileUploaderReducer";
import { FileUploader } from "./FileUploader";

const mapStateToProps = (state, ownProps) => {
  return {
    togglePreviewer: ownProps.togglePreviewer,
    setImageIsGet: ownProps.setImageIsGet,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onFileChange: (userFile) => dispatch(onFileChangeAC(userFile)),
  onFileUpload: () => dispatch(onFileUploadAC()),
});

const FileUploaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUploader);
export { FileUploaderContainer };
