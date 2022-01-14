import { fileUploaderAPI } from "../api/fileUploaderAPI";

const ON_FILE_CHANGE = "ON-FILE-CHANGE";
const ON_FILE_UPLOAD = "ON-FILE-UPLOAD";
const ON_EXTENSION_CHANGE = "ON-EXTENSION-CHANGE";
let initialState = {
  imageFile: null,
  // fileData: null,
  convertedFile: null,
  extensionTo: null,
  urlConvertedFile: null,
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
      let fileData = new FormData();
      fileData.append("ImageFile", stateCopy.imageFile);
      fileData.append("ExtensionTo", stateCopy.extensionTo);
      //stateCopy.fileData = fileData; скорее всего избыточно. И так будет работать
      fileUploaderAPI
        .sendImageToServer(fileData)
        .then((response) => {
          stateCopy.convertedFile = response.data;
        })
        .then(() => {
          stateCopy.urlConvertedFile = URL.createObjectURL(
            stateCopy.convertedFile
          );
        });

      return stateCopy;
    }
    case ON_EXTENSION_CHANGE: {
      let stateCopy = { ...state };
      stateCopy.extensionTo = action.extensionTo;
      return stateCopy;
    }
    default: {
      return { ...state };
    }
  }
};
export const onExtensionChangeAC = (ext) => ({
  type: ON_EXTENSION_CHANGE,
  extensionTo: ext,
});
export const onFileChangeAC = (imageFile) => ({
  type: ON_FILE_CHANGE,
  imageFile: imageFile,
});
export const onFileUploadAC = () => ({ type: ON_FILE_UPLOAD });
export { fileUploaderReducer };
