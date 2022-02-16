export interface imageHistoryReducerState {
    imageListArr:null|string[]
    URLImageById:null|string
}
export enum imageHistoryAE{
    LOAD_IMAGE_HISTORY = "LOAD-IMAGE-HISTORY", LOAD_IMAGE_BY_ID = "LOAD-IMAGE-BY-ID"
}
interface LOAD_IMAGE_HISTORY{
    type:imageHistoryAE.LOAD_IMAGE_HISTORY
    imageListArr:null|string[]
}
interface LOAD_IMAGE_BY_ID{
    type: imageHistoryAE.LOAD_IMAGE_BY_ID
    URLImageById:null|string
}
export type TImageHistoryA=LOAD_IMAGE_HISTORY|LOAD_IMAGE_BY_ID