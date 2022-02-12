import { FC, useEffect, useState } from "react";
import { Alert, ListGroup } from "react-bootstrap";
import { ImageHistoryListItem } from "./ImageHistoryListItem";
import style from "./ImageHistoryList.module.css";
import { Navigate } from "react-router-dom";
import { IImageHistoryList, IImageListItem } from "./interface";

export const ImageHistoryList: FC<IImageHistoryList> = 
({getImageById, getImageHistoryList, imageListArr,URLImageById})=>{
  const [showAlertNotAuth, setShowAlertNotAuth] = useState<boolean>(false);
  const [isMessageShow, setIsMessageShow] = useState<boolean>(false);
  const [navToHome, setNavToHome] = useState<boolean>(false);
  useEffect(() => {
    if (imageListArr === null) getImageHistoryList();
  });
  const mapImageLinkItem = () => {
    if (imageListArr !== null) {
      return imageListArr.map((imageListItem:IImageListItem) => (
        <ImageHistoryListItem
          imageListItem={imageListItem}
          getImageByID={getImageById}
          URLImageById={URLImageById}
        />
      ));
    }
  };
  const AlertNotAuth = () => {
    if (localStorage.getItem("token") === null && !isMessageShow) {
      setShowAlertNotAuth(true);
      setIsMessageShow(true);
    }
    if (navToHome) {
      return <Navigate to={"/"} />;
    }
    if (showAlertNotAuth) {
      return (
        <Alert
          variant="danger"
          onClose={() => {
            return setNavToHome(true);
          }}
          dismissible
        >
          <Alert.Heading>Oh! You don't authorized!</Alert.Heading>
          <p>
            You need to be authorized for see your history of converted files.
          </p>
        </Alert>
      );
    }
  };
  return (
    <div className={style.stretchDiv}>
      <h3>History</h3>
      <div style={{ textAlign: "left" }}>{AlertNotAuth()}</div>
      <ListGroup as="ul">{mapImageLinkItem()}</ListGroup>
    </div>
  );
}
