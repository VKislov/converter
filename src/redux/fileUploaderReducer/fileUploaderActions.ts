import { Dispatch } from "redux";
import { fileUploaderAPI } from "../../api/fileUploaderAPI";
import { initialAPI } from "../../api/initialAPI";
import { fileUploaderReducerConsts } from "../common/actionTypeConsts";
import { IAction } from "../interface";

export const changeExtensionInStoreAC = (ext:string) => ({
    type: fileUploaderReducerConsts.CHANGE_EXTENSION_IN_STORE,
    extensionTo: ext,
  });
  export const onFileChangeAC = (imageFile:File) => ({
    type: fileUploaderReducerConsts.ON_FILE_CHANGE,
    imageFile: imageFile,
  });
  export const onFileUploadAC = (URLconvertedFile:string) => ({
    type: fileUploaderReducerConsts.ON_FILE_UPLOAD,
    URLconvertedFile: URLconvertedFile,
  });
  
  export const loadExtAC = (extArr:string[]) => ({ type: fileUploaderReducerConsts.LOAD_EXT, extArr: extArr });
  const uploadButtonDisablerAC = (boolean:boolean) => ({
    type: fileUploaderReducerConsts.UPLOAD_BUTTON_DISABLE,
    boolean,
  });
  export const sendImageToServerTC = (imageFile:File, extensionTo:string) => {
    return async (dispatch:Dispatch<IAction>) => {
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
    return async (dispatch:Dispatch<IAction>) => {
      let extArr = await initialAPI.initialExt().then((resp) => resp.data);
      dispatch(loadExtAC(extArr));
    };
  };
  
  const setImageFileNameAC = () => ({
    type: fileUploaderReducerConsts.SET_IMAGE_FILE_NAME,
  });