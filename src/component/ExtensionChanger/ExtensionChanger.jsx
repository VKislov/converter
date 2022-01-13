import { Dropdown, DropdownButton } from "react-bootstrap";

export const ExtensionChanger = (props) => {
  return (
    <div>
      <DropdownButton id="dropdown-item-button" title="Dropdown button">
        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
        <Dropdown.Item as="button" onClick={props.onExtensionChange("png")}>
          png
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={props.onExtensionChange("jpg")}>
          jpg
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={props.onExtensionChange("svg")}>
          svg
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};
