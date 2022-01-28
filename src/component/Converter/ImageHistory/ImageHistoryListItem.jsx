import React from "react";
import { ListGroupItem } from "react-bootstrap";

export function ItemListGroup(props) {
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
      <a href={props.link} download={props.convertedImageName}>
        <ListGroupItem as="li" className="item">
          <div>{props.fromImageName}</div>
          <div>{props.convertedImageName}</div>
        </ListGroupItem>
      </a>
    </div>
  );
}
