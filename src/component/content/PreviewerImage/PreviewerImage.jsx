export const PreviewerImage = (props) => {
  let img = URL.createObjectURL(props.imageFile);
  return (
    <div>
      <h2>File Details:</h2>
      <p>File Name: {props.imageFile.name}</p>
      <p>File Type: {props.imageFile.type}</p>
      <img alt="Preview" src={img}></img>
    </div>
  );
};
