import { useState } from "react";
import { CloseButton, Modal, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

// не используется пока что сделал через алерт бутстрапа
//
//
//
//
//
//
//
//
//
//
//

export const ModalMessageNotAuthorized = (props) => {
  const [isModalMessageNotAuthorizedShow, setModalMessageNotAuthorizedShow] =
    useState(true);
  return (
    <Modal
      show={isModalMessageNotAuthorizedShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader id="contained-modal-title-vcenter">
        <CloseButton
          onClick={() => {
            setModalMessageNotAuthorizedShow(false);
          }}
        ></CloseButton>
      </ModalHeader>
      <ModalBody>
        <h2>You need to be authorized to open your history </h2>
      </ModalBody>
    </Modal>
  );
};
