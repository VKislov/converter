import { userAPI } from "../api/userAPI";

const LOAD_IMAGE_HISTORY = "LOAD-IMAGE-HISTORY";
const LOAD_IMAGE_BY_ID = "LOAD-IMAGE-BY-ID";
const initialState = { imageListArr: null, URLImageById: null };
export const imageHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IMAGE_HISTORY: {
      let stateCopy = { ...state };
      stateCopy.imageListArr = action.imageListArr;
      return stateCopy;
    }
    case LOAD_IMAGE_BY_ID: {
      let stateCopy = { ...state };
      stateCopy.URLImageById = action.URLImageById;
      return stateCopy;
    }
    default: {
      return state;
    }
  }
};
export const getImageHistoryListAC = (imageListArr) => ({
  type: LOAD_IMAGE_HISTORY,
  imageListArr,
});
export const getImageByIdAC = (URLImageById) => ({
  type: LOAD_IMAGE_BY_ID,
  URLImageById,
});
export const getImageById = (id) => {
  return async (dispatch) => {
    let URLImageById = await userAPI.getImageById(id).then((resp) => {
      return URL.createObjectURL(resp.data);
    });
    dispatch(getImageByIdAC(URLImageById));
  };
};
export const getImageHistoryList = () => {
  return async (dispatch) => {
    let imageListArr = await userAPI
      .getImageHistoryList()
      .then((resp) => resp.data);
    dispatch(getImageHistoryListAC(imageListArr));
  };
};
