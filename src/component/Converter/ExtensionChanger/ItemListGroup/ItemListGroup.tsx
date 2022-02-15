import React, { FC } from "react";
import { ListGroup } from "react-bootstrap";
import { IItemListGroupProps } from "./interface";

export const ItemListGroup: FC<IItemListGroupProps> = ({extension,onExtensionChange})=>{

  const changeExtensionOnClick = () => {
    onExtensionChange(extension);
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
        <ListGroup as="ul">
          <ListGroup.Item
            as="li"
            onClick={changeExtensionOnClick}
            className="item"
          >
            {extension}
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }

