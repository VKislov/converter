export const PreviewerImage = (props) => {
  return (
    <div>
      <h2>File Details:</h2>
      <p>File Name: {props.imageFileName}</p>
      <p>File Type: {props.imageFileType}</p>
      <img alt="Preview" src={props.imageFileUrl}></img>
    </div>
  );
};
