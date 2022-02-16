import { connect } from "react-redux";
import {
  getImageByIdAC,
  getImageHistoryList,
} from "../../../redux/imageHistoryReducer/imageHistoryActions";
import { ImageHistoryList } from "./ImageHistoryList";
const mapDispatchToProps = (dispatch) => {
  return {
    getImageHistoryList: () => {
      dispatch(getImageHistoryList());
    },
    getImageById: (id) => {
      dispatch(getImageByIdAC(id));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    URLImageById: state.imageHistoryReducer.URLImageById,
    imageListArr: state.imageHistoryReducer.imageListArr,
  };
};
export const ImageHistoryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageHistoryList);
