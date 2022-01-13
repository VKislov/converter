import { connect } from "react-redux";
import { PreviewerImage } from "./PreviewerImage";
const mapStateToProps = (state) => {
  return {
    imageFile: state.fileUploaderReducer.imageFile,
  };
};
const PreviewerImageContainer = connect(mapStateToProps, {})(PreviewerImage);
export { PreviewerImageContainer };
