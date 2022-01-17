import React from "react";

export class FileUploader extends React.Component {
  state = { imageIsGet: false };
  onFileChange = (event) => {
    this.props.onFileChange(event.target.files[0]);
    this.props.setImageIsGet();
    this.setState({ imageIsGet: true });
  };
  onFileUpload = () => {
    this.props.sendImageToServerTC(
      this.props.imageFile,
      this.props.extensionTo
    );
  };
  preview = () => {
    if (this.state.imageIsGet) {
      this.props.togglePreviewer();
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
