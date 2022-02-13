
export interface IImageHistoryReducerState {
    imageFile: null|File,
    convertedFile: null|File,
    extensionTo: null|string,
    URLconvertedFile: null|string,
    extensionsFromServer: null|string[],
    uploadButtonDisable: boolean,
    imageFileName: null|string,
}
export enum fileUploaderAE{
     ON_FILE_CHANGE = "ON-FILE-CHANGE",
 ON_FILE_UPLOAD = "ON-FILE-UPLOAD",
 CHANGE_EXTENSION_IN_STORE = "CHANGE-EXTENSION-IN-STORE",
 LOAD_EXT = "LOAD-EXT",
 UPLOAD_BUTTON_DISABLE = "UPLOAD-BUTTON-DISABLE",
 SET_IMAGE_FILE_NAME = "SET-IMAGE-FILE-NAME",
}
interface ON_FILE_CHANGE {
    type:fileUploaderAE.ON_FILE_CHANGE
    imageFile:null|File
}
interface ON_FILE_UPLOAD{
    type:fileUploaderAE.ON_FILE_UPLOAD
    URLconvertedFile:null|string
}
interface CHANGE_EXTENSION_IN_STORE {
    type: fileUploaderAE.CHANGE_EXTENSION_IN_STORE
    extensionTo: null|string
}
interface LOAD_EXT{
    type: fileUploaderAE.LOAD_EXT
    extArr:null|string[]
}
interface UPLOAD_BUTTON_DISABLE{
    type:fileUploaderAE.UPLOAD_BUTTON_DISABLE
    boolean:boolean
}
interface SET_IMAGE_FILE_NAME{
    type:fileUploaderAE.SET_IMAGE_FILE_NAME
}
export type TFileUploaderA= ON_FILE_CHANGE|ON_FILE_UPLOAD|CHANGE_EXTENSION_IN_STORE|LOAD_EXT|UPLOAD_BUTTON_DISABLE|SET_IMAGE_FILE_NAME