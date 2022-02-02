import React from "react";
import { ListGroup } from "react-bootstrap";

export class ItemListGroup extends React.Component {
  onExtensionChange = () => {
    this.props.onExtensionChange(this.props.extension);
  };
  render() {
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
            onClick={this.onExtensionChange}
            className="item"
          >
            {this.props.extension}
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
