import React from "react";
import { ListGroup } from "react-bootstrap";

export class ItemListGroup extends React.Component {
  cock = () => {
    this.props.onExtensionChange(this.props.extension);
  };
  render() {
    return (
      <div>
        <ListGroup.Item
          as="li"
          onClick={this.cock}
          style={{ textAlign: "left" }}
        >
          {this.props.extension}
        </ListGroup.Item>
      </div>
    );
  }
}
