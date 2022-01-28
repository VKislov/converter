import React from "react";
import { Button } from "react-bootstrap";
import style from "./FileUploader.module.css";
export class FileUploader extends React.Component {
  state = {};
  onFileChange = (event) => {
    this.props.onFileChange(event.target.files[0]);
    this.props.setImageIsGet();
  };
  onFileUpload = () => {
    this.props.sendImageToServerTC(
      this.props.imageFile,
      this.props.extensionTo
    );
  };
  preview = () => {
    if (this.props.imageIsGet) {
      this.props.togglePreviewer();
    }
  };
  render() {
    return (
      <div>
        <div className={style.withBox}>
          <input
            type="file"
            onChange={this.onFileChange}
            style={{ borderRadius: "8%" }}
          />
        </div>
        <div className={style.ButtonWrapper}>
          <Button onClick={this.onFileUpload} className={style.Button}>
            Upload!
          </Button>
        </div>
        <div className={style.ButtonWrapper}>
          <Button onClick={this.preview} className={style.Button}>
            Preview
          </Button>
        </div>
      </div>
    );
  }
}
