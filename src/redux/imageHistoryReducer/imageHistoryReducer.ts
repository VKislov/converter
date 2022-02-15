import { Dispatch } from "redux";
import { userAPI } from "../../api/userAPI";
import { IAction } from "../interface";
import { imageHistoryAE, imageHistoryReducerState, TImageHistoryA } from "./interface";

const LOAD_IMAGE_HISTORY = "LOAD-IMAGE-HISTORY";
const LOAD_IMAGE_BY_ID = "LOAD-IMAGE-BY-ID";
const initialState:imageHistoryReducerState = { imageListArr: null, URLImageById: null };
export const imageHistoryReducer = (state = initialState, action:TImageHistoryA):imageHistoryReducerState => {
  switch (action.type) {
    case imageHistoryAE.LOAD_IMAGE_HISTORY: {
      let stateCopy = { ...state };
      stateCopy.imageListArr = action.imageListArr;
      return stateCopy;
    }
    case imageHistoryAE.LOAD_IMAGE_BY_ID: {
      let stateCopy = { ...state };
      stateCopy.URLImageById = action.URLImageById;
      return stateCopy;
    }
    default: {
      return state;
    }
  }
};
export const getImageHistoryListAC = (imageListArr:string[]) => ({
  type: LOAD_IMAGE_HISTORY,
  imageListArr,
});
export const getImageByIdAC = (URLImageById:string) => ({
  type: LOAD_IMAGE_BY_ID,
  URLImageById,
});
export const getImageById = (id:number) => {
  return async (dispatch:Dispatch<IAction>) => {
    let URLImageById = await userAPI.getImageById(id).then((resp) => {
      return URL.createObjectURL(resp.data);
    });
    dispatch(getImageByIdAC(URLImageById));
  };
};
export const getImageHistoryList = () => {
  return async (dispatch:Dispatch<IAction>) => {
    let imageListArr = await userAPI
      .getImageHistoryList()
      .then((resp) => resp.data);
    dispatch(getImageHistoryListAC(imageListArr));
  };
};
