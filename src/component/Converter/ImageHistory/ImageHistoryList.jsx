import { useEffect, useState } from "react";
import { Alert, ListGroup } from "react-bootstrap";
import { ImageHistoryListItem } from "./ImageHistoryListItem";
import style from "./ImageHistoryList.module.css";
import { Navigate } from "react-router-dom";

export function ImageHistoryList(props) {
  const [showAlertNotAuth, setShowAlertNotAuth] = useState(false);
  const [isMessageShow, setIsMessageShow] = useState(false);
  const [navToHome, setNavToHome] = useState(false);
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
