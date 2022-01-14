import React from "react";
import { ExtensionChangerContainer } from "../ExtensionChanger/ExtensionChangerContainer";
import { FileUploaderContainer } from "../FileUploader/FileUploaderContainer";
import { PreviewerImageContainer } from "../PreviewerImage/PreviewerImageContainer";
import style from "./Content.module.css";
export class Content extends React.Component {
  state = { showPreviewer: false, imageIsGet: false };
  togglePreviewer = () => {
    this.setState({ showPreviewer: !this.state.showPreviewer });
  };
  setImageIsGet = () => {
    this.setState({ imageIsGet: true });
  };
  showPreviewer = () => {
    if (this.state.showPreviewer) {
      return <PreviewerImageContainer />;
    }
  };
  imageIsGet = () => {
    if (!this.state.imageIsGet) {
      return (
        <h4 style={{ margin: "50px" }}>
          Choose before Pressing the Upload button
        </h4>
      );
    } else if (this.state.imageIsGet && !this.state.showPreviewer) {
      return (
        <h4 style={{ margin: "50px" }}>
          Then you can pressing the upload and preview button
        </h4>
      );
    }
  };
  downloadImage = () => {
    if (!(this.props.urlConvertedFile === null)) {
      return (
        <a href={this.props.urlConvertedFile} download>
          download
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
          />
          {this.showPreviewer()}
          {this.imageIsGet()}
          {this.downloadImage()}
        </div>
        <div style={{ margin: "10px" }}>
          <ExtensionChangerContainer />
        </div>
      </div>
    );
  }
}
