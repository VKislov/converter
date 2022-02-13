import { fileUploaderAPI } from "../../api/fileUploaderAPI";
import { initialAPI } from "../../api/initialAPI";
import { TFileUploaderA, IImageHistoryReducerState, fileUploaderAE } from "./interface/index";
const ON_FILE_CHANGE = "ON-FILE-CHANGE";
const ON_FILE_UPLOAD = "ON-FILE-UPLOAD";
const CHANGE_EXTENSION_IN_STORE = "CHANGE-EXTENSION-IN-STORE";
const LOAD_EXT = "LOAD-EXT";
const UPLOAD_BUTTON_DISABLE = "UPLOAD-BUTTON-DISABLE";
const SET_IMAGE_FILE_NAME = "SET-IMAGE-FILE-NAME";

let initialState:IImageHistoryReducerState = {
  imageFile: null,
  convertedFile: null,
  extensionTo: null,
  URLconvertedFile: null,
  extensionsFromServer: null,
  uploadButtonDisable: true,
  imageFileName: null,
};

const fileUploaderReducer = (
  state = initialState,
  action:TFileUploaderA
):IImageHistoryReducerState => {
  switch (action.type) {
    case fileUploaderAE.ON_FILE_CHANGE: {
      let stateCopy = { ...state };
      stateCopy.imageFile = action.imageFile;
      stateCopy.uploadButtonDisable = false;
      return stateCopy;
    }
    case fileUploaderAE.ON_FILE_UPLOAD: {
      let stateCopy = { ...state };
      stateCopy.URLconvertedFile = action.URLconvertedFile;
      return stateCopy;
    }
    case fileUploaderAE.CHANGE_EXTENSION_IN_STORE: {
      let stateCopy = { ...state };
      stateCopy.extensionTo = action.extensionTo;
      return stateCopy;
    }
    case fileUploaderAE.LOAD_EXT: {
      let stateCopy = { ...state };
      stateCopy.extensionsFromServer = action.extArr;
      return stateCopy;
    }
    case fileUploaderAE.UPLOAD_BUTTON_DISABLE: {
      let stateCopy = { ...state };
      stateCopy.uploadButtonDisable = action.boolean;
      return stateCopy;
    }
    case fileUploaderAE.SET_IMAGE_FILE_NAME: {
      let stateCopy = { ...state };
      stateCopy.imageFileName = `${stateCopy.imageFile?.name.split(".")[0]}.${
        stateCopy.extensionTo
      }`;
      return stateCopy;
    }
    default: {
      return state;
    }
  }
};
export const changeExtensionInStoreAC = (ext:string) => ({
  type: CHANGE_EXTENSION_IN_STORE,
  extensionTo: ext,
});
export const onFileChangeAC = (imageFile:File) => ({
  type: ON_FILE_CHANGE,
  imageFile: imageFile,
});
export const onFileUploadAC = (URLconvertedFile:string) => ({
  type: ON_FILE_UPLOAD,
  URLconvertedFile: URLconvertedFile,
});
export { fileUploaderReducer };
export const loadExtAC = (extArr:string[]) => ({ type: LOAD_EXT, extArr: extArr });
const uploadButtonDisablerAC = (boolean:boolean) => ({
  type: UPLOAD_BUTTON_DISABLE,
  boolean,
});
export const sendImageToServerTC = (imageFile:File, extensionTo:string) => {
  return async (dispatch:any) => {
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
  return async (dispatch:any) => {
    let extArr = await initialAPI.initialExt().then((resp) => resp.data);
    dispatch(loadExtAC(extArr));
  };
};

const setImageFileNameAC = () => ({
  type: SET_IMAGE_FILE_NAME,
});
