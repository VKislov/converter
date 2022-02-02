import React from "react";
import { Button } from "react-bootstrap";
import style from "./Converter.module.css";
import { ExtensionChangerContainer } from "./ExtensionChanger/ExtensionChangerContainer";
import { FileUploaderContainer } from "./FileUploader/FileUploaderContainer";
import { PreviewerImageContainer } from "./PreviewerImage/PreviewerImageContainer";
export class Converter extends React.Component {
  state = { showPreviewer: false, imageIsGet: false };
  togglePreviewer = () => {
    this.setState({ showPreviewer: !this.state.showPreviewer });
  };
  setImageIsGet = () => {
    this.setState({ imageIsGet: true });
  };
  showPreviewer = () => {
    if (this.state.showPreviewer) {
      return (
        <PreviewerImageContainer
          togglePreviewer={this.togglePreviewer}
          showPreviewer={this.state.showPreviewer}
        />
      );
    }
  };
  imageIsGet = () => {
    if (!this.state.imageIsGet) {
      return (
        <h4 style={{ margin: "50px" }}>
          Choose before Pressing the Upload button
        </h4>
      );
    } else {
      return (
        <h4 style={{ margin: "50px" }}>
          Then you can pressing the upload and preview button
        </h4>
      );
    }
  };
  downloadImage = () => {
    if (this.props.convertedFile) {
      return (
        <a href={this.props.convertedFile} download>
          <Button>download</Button>
        </a>
      );
    }
  };

  render() {
    return (
      <div className={style.content}>
        <div className={style.box}>
          <FileUploaderContainer
            togglePreviewer={this.togglePreviewer}
            setImageIsGet={this.setImageIsGet}
            imageIsGet={this.state.imageIsGet}
          />

          {this.showPreviewer()}
          {this.downloadImage()}

          {this.imageIsGet()}
        </div>
        <div style={{ margin: "10px" }}>
          <ExtensionChangerContainer />
        </div>
      </div>
    );
  }
}
