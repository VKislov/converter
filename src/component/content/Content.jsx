import React from "react";
import style from "./Content.module.css";
import { FileUploaderContainer } from "./FileSelectorArea/FileUploaderContainer";
import { PreviewerImageContainer } from "./PreviewerImage/PreviewerImageContainer";
export class Content extends React.Component {
  state = { showPreviewer: false, imageIsGet: false };
  togglePreviewer = () => {
    this.setState({ showPreviewer: !this.state.showPreviewer });
  };
  imageIsGet = () => {
    this.setState({ imageIsGet: true });
  };
  render() {
    if (this.state.showPreviewer && this.state.imageIsGet) {
      return (
        <div className={style.content}>
          <div className={style.box}>
            <FileUploaderContainer
              togglePreviewer={this.togglePreviewer}
              imageIsGet={this.imageIsGet}
            />
            <PreviewerImageContainer />
          </div>
        </div>
      );
    } else {
      return (
        <div className={style.content}>
          <div className={style.box}>
            <FileUploaderContainer
              togglePreviewer={this.togglePreviewer}
              imageIsGet={this.imageIsGet}
            />
          </div>
        </div>
      );
    }
  }
}
