import { FC, useEffect, useState } from "react";
import { ListGroupItem } from "react-bootstrap";
import { IImageHistoryListItem} from "./interface";

export const ImageHistoryListItem: FC<IImageHistoryListItem> = ({URLImageById,getImageByID,imageListItem,}) =>{
  const [convertedImageName, setConvertedImageName] = useState<string|null>(null)
  const Downloader = (URLImageById:string) => {
    if (URLImageById !== null && convertedImageName !== null) {
      const link = document.createElement("a");
      link.href = URLImageById;
      link.download = convertedImageName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setConvertedImageName(null);
    }
  };
  const getImageById = () => {
    getImageByID(imageListItem.id);
    setConvertedImageName(imageListItem.convertedImageName);
  };
  useEffect(() => {
    if (URLImageById !== null) Downloader(URLImageById);
  });
  return (
    <div>
      <style type="text/css">
        {`
          .item{
              text-align: left;
          }
            .item:hover{
                background-color:azure;
            }
        `}
      </style>

      <ListGroupItem as="li" className="item" onClick={getImageById}>
        <div>From: {imageListItem.fromImageName}</div>
        <div>To: {imageListItem.convertedImageName}</div>
      </ListGroupItem>
    </div>
  );
}
