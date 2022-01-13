import { Dropdown, DropdownButton } from "react-bootstrap";

export const ExtensionChanger = (props) => {
  const onExtensionChangePng = () => {
    props.onExtensionChange("png");
  };
  const onExtensionChangeJpg = () => {
    props.onExtensionChange("jpg");
  };
  const onExtensionChangeBmp = () => {
    props.onExtensionChange("bmp");
  };
  return (
    <div>
      <DropdownButton id="dropdown-item-button" title="Extension to">
        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
        <Dropdown.Item as="button" onClick={onExtensionChangePng}>
          png
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={onExtensionChangeJpg}>
          jpg
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={onExtensionChangeBmp}>
          svg
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};
