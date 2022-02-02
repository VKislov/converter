import React, { useEffect, useState } from "react";
import { ListGroupItem } from "react-bootstrap";

export function ImageHistoryListItem(props) {
  const [convertedImageName, setConvertedImageName] = useState(null);
  const Downloader = (URLImageById) => {
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
    props.getImageById(props.imageListItem.id);
    setConvertedImageName(props.imageListItem.convertedImageName);
  };
  useEffect(() => {
    if (props.URLImageById !== null) Downloader(props.URLImageById);
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
        <div>From: {props.imageListItem.fromImageName}</div>
        <div>To: {props.imageListItem.convertedImageName}</div>
      </ListGroupItem>
    </div>
  );
}
