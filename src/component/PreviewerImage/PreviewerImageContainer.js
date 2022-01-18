import { connect } from "react-redux";
import { PreviewerImage } from "./PreviewerImage";
const mapStateToProps = (state, ownProps) => {
  return {
    imageFileName: state.fileUploaderReducer.imageFile.name,
    imageFileType: state.fileUploaderReducer.imageFile.type,
    imageFileUrl: URL.createObjectURL(state.fileUploaderReducer.imageFile),
    togglePreviewer: ownProps.togglePreviewer,
    showPreviewer: ownProps.showPreviewer,
  };
};
const PreviewerImageContainer = connect(mapStateToProps, {})(PreviewerImage);
export { PreviewerImageContainer };
