import React from "react";
import { ListGroup } from "react-bootstrap";

export class ItemListGroup extends React.Component {
  cock = () => {
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

        <ListGroup.Item as="li" onClick={this.cock} className="item">
          {this.props.extension}
        </ListGroup.Item>
      </div>
    );
  }
}