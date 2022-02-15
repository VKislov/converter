import { TFileUploaderA, IImageHistoryReducerState, fileUploaderAE } from "./interface/index";


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

export { fileUploaderReducer };