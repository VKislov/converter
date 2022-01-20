import React from "react";
import { Button, Collapse, ListGroup } from "react-bootstrap";
import style from "./ExtensionChanger.module.css";
import { ItemListGroup } from "./ItemListGroup/ItemListGroup";
export class ExtensionChanger extends React.Component {
  componentDidMount() {
    this.props.loadExt();
  }

  state = { extInSelector: "Select extension" };
  onExtensionChange = (ext) => {
    this.setState({ extInSelector: ext, openCollapse: false });
    this.props.changeExtensionInStore(ext);
  };

  mapExtensionsFromProps = () => {
    if (this.props.extensionsFromServer !== null) {
      return this.props.extensionsFromServer.map((ext) => (
        <ItemListGroup
          extension={ext}
          onExtensionChange={this.onExtensionChange}
        />
      ));
    }
  };
  render() {
    return (
      <div className={style.ExtensionChangerArea}>
        {
          <style type="text/css">
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
            onClick={() =>
              this.setState({ openCollapse: !this.state.openCollapse })
            }
            aria-controls="example-collapse-text"
            aria-expanded={this.state.openCollapse}
          >
            {this.state.extInSelector}
          </Button>
          <Collapse in={this.state.openCollapse}>
            <div id="example-collapse-text">
              <ListGroup as="ul">{this.mapExtensionsFromProps()}</ListGroup>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}
