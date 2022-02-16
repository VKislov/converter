import { FC } from "react";
import { Button } from "react-bootstrap";
import { useAuthActions } from "../../../redux/hooks/useAuthActions";

export const LogOut: FC = () => {
  const {logOut} = useAuthActions()
  return (
    <Button
      onClick={() => {
        return logOut();
      }}
    >
      LogOut
    </Button>
  );
};
