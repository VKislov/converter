import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { ImageHistoryListItem } from "./ImageHistoryListItem";
import style from "./ImageHistoryList.module.css";

export function ImageHistoryList(props) {
  useEffect(() => {
    if (props.imageListArr === null) props.getImageHistoryList();
  });
  const mapImageLinkItem = () => {
    if (props.imageListArr !== null) {
      return props.imageListArr.map((imageListItem) => (
        <ImageHistoryListItem
          imageListItem={imageListItem}
          getImageById={props.getImageById}
          URLImageById={props.URLImageById}
        />
      ));
    }
  };
  return (
    <div className={style.stretchDiv}>
      <h3>History</h3>
      <ListGroup as="ul">{mapImageLinkItem()}</ListGroup>
    </div>
  );
}
