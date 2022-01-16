import { connect } from "react-redux";
import { Content } from "./Content";
const mapStateToProps = (state) => {
  return { convertedFile: state.fileUploaderReducer.convertedFile };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
