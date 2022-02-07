import { connect } from "react-redux";
import { Converter } from "./Converter";
const mapStateToProps = (state) => {
  return {
    convertedFile: state.fileUploaderReducer.URLconvertedFile,
    imageFileName: state.fileUploaderReducer.imageFileName,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export const ConverterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Converter);
