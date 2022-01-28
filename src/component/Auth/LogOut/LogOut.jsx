import { Button } from "react-bootstrap";

export const LogOut = (props) => {
  return (
    <Button
      onClick={() => {
        return props.logOut();
      }}
    >
      LogOut
    </Button>
  );
};
