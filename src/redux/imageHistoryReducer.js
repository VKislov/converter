const LOAD_IMAGE_HISTORY = "LOAD-IMAGE-HISTORY";
const initialState = {};
export const imageHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IMAGE_HISTORY: {
      let stateCopy = { ...state };
      stateCopy.extensionsFromServer = action.extArr;
      return stateCopy;
    }
    default: {
      return { ...state };
    }
  }
};
export const loadExtAC = (extArr) => ({ type: LOAD_IMAGE_HISTORY });
export const getExtFromServerTC = () => {
  return async (dispatch) => {
    let imageArr = await initialAPI.initialExt().then((resp) => resp.data);
    dispatch(loadExtAC(extArr));
  };
};
