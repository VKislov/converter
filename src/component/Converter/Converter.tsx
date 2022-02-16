import { FC, useState } from "react";
import { Button } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import style from "./Converter.module.css";
import { ExtensionChanger } from "./ExtensionChanger/ExtensionChanger";
import { FileUploader } from "./FileUploader/FileUploader";
import { PreviewerImage } from "./PreviewerImage/PreviewerImage";

export const Converter:FC=()=>{
  const {URLconvertedFile,imageFileName}= useAppSelector(state=>state.fileUploaderReducer)
  const [showPreviewer, setShowPreviewer]= useState<boolean>(false)
  const [imageIsGet, setImageIsGet]= useState<boolean>(false)
  const togglePreviewer = ()=>{setShowPreviewer(!showPreviewer)}
  const showPreviewerModal = () => {
    if (showPreviewer) {
      return (
        <PreviewerImage
          togglePreviewer={togglePreviewer}
          showPreviewer={showPreviewer}
        />
      );
    }
  };
  const imageIsGetMessage = () => {
    if (!imageIsGet) {
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
  const downloadImage = () => {
    if (URLconvertedFile) {
      return (
        <a href={URLconvertedFile} download={imageFileName}>
          <Button>download</Button>
        </a>
      );
    }
  };
  return (
    <div className={style.content}>
      <div className={style.box}>
        <FileUploader
          togglePreviewer={togglePreviewer}
          setImageIsGet={()=>setImageIsGet(true)}
          imageIsGet={imageIsGet}
        />
        {showPreviewerModal()}
        {downloadImage()}
        {imageIsGetMessage()}
      </div>
      <div style={{ margin: "10px" }}>
        <ExtensionChanger />
      </div>
    </div>
  )
}

