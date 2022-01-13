import React from "react";

export class FileUploader extends React.Component {
  state = {};
  onFileChange = (event) => {
    this.props.onFileChange(event.target.files[0]);
    this.props.imageIsGet();
  };
  onFileUpload = () => {
    this.props.onFileUpload();
  };
  preview = () => {
    this.props.togglePreviewer();
  };
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <input type="file" onChange={this.onFileChange} />
        <button onClick={this.onFileUpload}>Upload!</button>
        <button onClick={this.preview}>Preview</button>
      </div>
    );
  }
}
