import { Dispatch } from "redux";
import { userAPI } from "../../api/userAPI";
import { imageHistoryReducerConsts } from "../common/actionTypeConsts";
import { IAction } from "../interface";

export const getImageHistoryListAC = (imageListArr:string[]) => ({
    type: imageHistoryReducerConsts.LOAD_IMAGE_HISTORY,
    imageListArr,
  });
  export const getImageByIdAC = (URLImageById:string) => ({
    type: imageHistoryReducerConsts.LOAD_IMAGE_BY_ID,
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