import {FC, useEffect, useState} from "react";
import { Button, Modal } from "react-bootstrap";
import { useAppSelector } from "../../../redux/hooks/useAppSelector";
import { IPreviewerImageProps } from "./interface";

export const PreviewerImage:FC<IPreviewerImageProps> =({togglePreviewer,
  showPreviewer})=> {
    const {imageFile}=useAppSelector(state=>state.fileUploaderReducer) 
    const [imageFileName, setImageFileName] = useState<string>("File not selected")
    const [imageFileType, setImageFileType] = useState<string>("File not selected")
    const [imageFileUrl, setImageFileUrl] = useState<string>("File not selected")
    useEffect(()=>{
      if(imageFile){
        setImageFileName(imageFile.name)
        setImageFileType(imageFile.type)
        setImageFileUrl(URL.createObjectURL(imageFile))
      }
    },[imageFile])
    return (
      <Modal
        show={showPreviewer}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>File Details:</h2>
            <p>File Name: {imageFileName}</p>
            <p>File Type: {imageFileType}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            alt="Preview"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            src={imageFileUrl}
          ></img>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={togglePreviewer}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

