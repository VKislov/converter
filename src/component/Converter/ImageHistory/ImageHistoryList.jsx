import { ListGroup } from "react-bootstrap";
import { ItemListGroup } from "../ExtensionChanger/ItemListGroup/ItemListGroup";

export function ImageHistoryList(props) {
  const mapImageLink = () => {
    if (props.extensionsFromServer !== null) {
      return props.extensionsFromServer.map((ext) => (
        <ItemListGroup extension={ext} />
      ));
    }
  };

  return (
    <div>
      <style type="text/css">
        {`
          .item{
              text-align: left;
          }
            .item:hover{
                background-color:azure;
            }
            `}
      </style>
      <ListGroup as="ul">{mapImageLink()}</ListGroup>
    </div>
  );
}
