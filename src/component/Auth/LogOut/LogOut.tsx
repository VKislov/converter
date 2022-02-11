import { FC } from "react";
import { Button } from "react-bootstrap";
interface LogOutProps{
  logOut:()=>void
}
export const LogOut: FC<LogOutProps> = ({logOut}) => {
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
