export interface IImageListItem {
    id:number,
    convertedImageName:string,
    fromImageName:string
}

export interface IImageHistoryList{
    getImageById: ()=>void
    getImageHistoryList: ()=>void
    imageListArr: [IImageListItem]
    URLImageById:string
}

export interface IImageHistoryListItem {
    imageListItem: IImageListItem
    URLImageById: string
    getImageByID: (id:number)=> void
  }

