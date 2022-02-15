import { FC, useEffect, useState } from "react";
import { Button, Collapse, ListGroup } from "react-bootstrap";
import { useAppSelector } from "../../../redux/hooks/useAppSelector";
import { useFileUploaderActions } from "../../../redux/hooks/useFileUploaderActions";
import style from "./ExtensionChanger.module.css";
import { ItemListGroup } from "./ItemListGroup/ItemListGroup";
export const ExtensionChanger:FC = ()=> {
  const {extensionsFromServer}=useAppSelector(state=>state.fileUploaderReducer)
  const {getExtFromServerTC,changeExtensionInStoreAC}= useFileUploaderActions()
  useEffect(()=>{getExtFromServerTC()},[])
  const [extInSelector, setExtInSelector] = useState<string>("Select extension")
  const [openCollapse, setOpenCollapse]= useState<boolean>(false)
  const onExtensionChange = (extensionTo:string) => {
    setExtInSelector(extensionTo)
    setOpenCollapse(false) 
    changeExtensionInStoreAC(extensionTo);
  };

  const mapExtensionsFromProps = () => {
    if (extensionsFromServer !== null) {
      return extensionsFromServer.map((extension) => (
        <ItemListGroup
          key={extension}
          extension={extension}
          onExtensionChange={onExtensionChange}
        />
      ));
    }
  };
   
    return (
      <div className={style.ExtensionChangerArea}>
        {
          <style type="text/css"> {/*По-другому бутстрап не хотел принимать стили*/}
            {`
        .btn-width {
          width: 100%;
  border-radius: 5px;
  outline: solid tan;
  text-align:left;
        }
      `}
          </style>
        }
        <div className={style.extensionToText}>Extension to: </div>

        <div className={style.selectorExt}>
          <Button
            variant="width"
            onClick={() =>setOpenCollapse(!openCollapse)}
            aria-controls="example-collapse-text"
            aria-expanded={openCollapse}
          >
            {extInSelector}
          </Button>
          <Collapse in={openCollapse}>
            <div id="example-collapse-text">
              <ListGroup as="ul">{mapExtensionsFromProps()}</ListGroup>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }

