import axios from "axios";
import { fileUploaderAPI } from "../api/fileUploaderAPI";
import { initialAPI } from "../api/initialAPI";

const ON_FILE_CHANGE = "ON-FILE-CHANGE";
const ON_FILE_UPLOAD = "ON-FILE-UPLOAD";
const CHANGE_EXTENSION_IN_STORE = "CHANGE_EXTENSION_IN_STORE";
const LOAD_EXT = "LOAD-EXT";

let initialState = {
  imageFile: null,
  convertedFile: null,
  extensionTo: null,
  URLconvertedFile: null,
  extensionsFromServer: null,
};

const fileUploaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_FILE_CHANGE: {
      let stateCopy = { ...state };
      stateCopy.imageFile = action.imageFile;
      return stateCopy;
    }
    case ON_FILE_UPLOAD: {
      let stateCopy = { ...state };
      stateCopy.URLconvertedFile = action.URLconvertedFile;
      return stateCopy;
    }
    case CHANGE_EXTENSION_IN_STORE: {
      let stateCopy = { ...state };
      stateCopy.extensionTo = action.extensionTo;
      return stateCopy;
    }
    case LOAD_EXT: {
      let stateCopy = { ...state };
      stateCopy.extensionsFromServer = action.extArr;
      return stateCopy;
    }
    default: {
      return { ...state };
    }
  }
};
export const changeExtensionInStoreAC = (ext) => ({
  type: CHANGE_EXTENSION_IN_STORE,
  extensionTo: ext,
});
export const onFileChangeAC = (imageFile) => ({
  type: ON_FILE_CHANGE,
  imageFile: imageFile,
});
export const onFileUploadAC = (URLconvertedFile) => ({
  type: ON_FILE_UPLOAD,
  URLconvertedFile: URLconvertedFile,
});
export { fileUploaderReducer };
export const loadExtAC = (extArr) => ({ type: LOAD_EXT, extArr: extArr });

export const sendImageToServerTC = (imageFile, extensionTo) => {
  return async (dispatch) => {
    let formData = new FormData();
    formData.append("ImageFile", imageFile);
    formData.append("ExtensionTo", extensionTo);
    let URLconvertedFile = await fileUploaderAPI
      .sendImageToServer(formData)
      .then((response) => {
        let URLconvertedFile = URL.createObjectURL(response.data);
        return URLconvertedFile;
      });
    dispatch(onFileUploadAC(URLconvertedFile));
  };
};

export const getExtFromServerTC = () => {
  return async (dispatch) => {
    let extArr = await initialAPI.initialExt().then((resp) => resp.data);
    dispatch(loadExtAC(extArr));
  };
};
