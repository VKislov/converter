import { connect } from "react-redux";
import { PreviewerImage } from "./PreviewerImage";
const mapStateToProps = (state) => {
  return {
    imageFileName: state.fileUploaderReducer.imageFile.name,
    imageFileType: state.fileUploaderReducer.imageFile.type,
    imageFileUrl: URL.createObjectURL(state.fileUploaderReducer.imageFile),
  };
};
const PreviewerImageContainer = connect(mapStateToProps, {})(PreviewerImage);
export { PreviewerImageContainer };
