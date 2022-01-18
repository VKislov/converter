import React from "react";
import { Button, Modal } from "react-bootstrap";

export class PreviewerImage extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.showPreviewer}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>File Details:</h2>
            <p>File Name: {this.props.imageFileName}</p>
            <p>File Type: {this.props.imageFileType}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            alt="Preview"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            src={this.props.imageFileUrl}
          ></img>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.togglePreviewer}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
