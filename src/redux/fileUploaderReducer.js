import { fileUploaderAPI } from "../api/fileUploaderAPI";
import { initialAPI } from "../api/initialAPI";

const ON_FILE_CHANGE = "ON-FILE-CHANGE";
const ON_FILE_UPLOAD = "ON-FILE-UPLOAD";
const CHANGE_EXTENSION_IN_STORE = "CHANGE-EXTENSION-IN-STORE";
const LOAD_EXT = "LOAD-EXT";
const UPLOAD_BUTTON_DISABLE = "UPLOAD-BUTTON-DISABLE";
const SET_IMAGE_FILE_NAME = "SET-IMAGE-FILE-NAME";

let initialState = {
  imageFile: null,
  convertedFile: null,
  extensionTo: null,
  URLconvertedFile: null,
  extensionsFromServer: null,
  uploadButtonDisable: true,
  imageFileName: null,
};

const fileUploaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_FILE_CHANGE: {
      let stateCopy = { ...state };
      stateCopy.imageFile = action.imageFile;
      stateCopy.uploadButtonDisable = false;
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
    case UPLOAD_BUTTON_DISABLE: {
      let stateCopy = { ...state };
      stateCopy.uploadButtonDisable = action.boolean;
      return stateCopy;
    }
    case SET_IMAGE_FILE_NAME: {
      let stateCopy = { ...state };
      stateCopy.imageFileName = `${stateCopy.imageFile.name.split(".")[0]}.${
        stateCopy.extensionTo
      }`;
      return stateCopy;
    }
    default: {
      return state;
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
const uploadButtonDisablerAC = (boolean) => ({
  type: UPLOAD_BUTTON_DISABLE,
  boolean,
});
export const sendImageToServerTC = (imageFile, extensionTo) => {
  return async (dispatch) => {
    let formData = new FormData();
    formData.append("ImageFile", imageFile);
    formData.append("ExtensionTo", extensionTo);
    dispatch(uploadButtonDisablerAC(true));
    let URLconvertedFile = await fileUploaderAPI
      .sendImageToServer(formData)
      .then((response) => {
        let URLconvertedFile = URL.createObjectURL(response.data);
        return URLconvertedFile;
      });
    dispatch(setImageFileNameAC());
    dispatch(uploadButtonDisablerAC(false));
    dispatch(onFileUploadAC(URLconvertedFile));
  };
};

export const getExtFromServerTC = () => {
  return async (dispatch) => {
    let extArr = await initialAPI.initialExt().then((resp) => resp.data);
    dispatch(loadExtAC(extArr));
  };
};

const setImageFileNameAC = () => ({
  type: SET_IMAGE_FILE_NAME,
});
