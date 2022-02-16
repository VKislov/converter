import { imageHistoryAE, imageHistoryReducerState, TImageHistoryA } from "./interface";


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
