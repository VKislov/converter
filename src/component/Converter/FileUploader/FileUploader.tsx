import { FC } from "react";
import { Button } from "react-bootstrap";
import { useAppSelector } from "../../../redux/hooks/useAppSelector";
import { useFileUploaderActions } from "../../../redux/hooks/useFileUploaderActions";
import style from "./FileUploader.module.css";
import { IFileUploaderProps } from "./interface";
export const FileUploader:FC<IFileUploaderProps> =({togglePreviewer,setImageIsGet,imageIsGet})=> {
  const {imageFile,extensionTo,uploadButtonDisable}=useAppSelector(state=>state.fileUploaderReducer)
  const {sendImageToServerTC,onFileChangeAC,}= useFileUploaderActions()
  const onFileChangeHendler = (event:any) => {
    onFileChangeAC(event.target.files[0])
    setImageIsGet();
  };
  const onFileUploadHendler = async () => {
    if(imageFile!==null&&extensionTo!==null){
      await sendImageToServerTC(imageFile,extensionTo)
    }
  }
  const preview = () => {
    if (imageIsGet) {
      togglePreviewer();
    }
  };
  
    return (
      <div>
        <div className={style.withBox}>
          <input
            type="file"
            onChange={onFileChangeHendler}
            style={{ borderRadius: "8%" }}
          />
        </div>
        <div className={style.ButtonWrapper}>
          <Button
            onClick={onFileUploadHendler}
            className={style.Button}
            disabled={uploadButtonDisable}
          >
            Upload!
          </Button>
        </div>
        <div className={style.ButtonWrapper}>
          <Button onClick={preview} className={style.Button}>
            Preview
          </Button>
        </div>
      </div>
    );
  }

