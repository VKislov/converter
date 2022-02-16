import { FC, useState } from "react";
import { Button } from "react-bootstrap";
import { AuthModal } from "./AuthModal";
import { IAuth } from "./interface";


export const Auth:FC<IAuth> = ({logIn, setBedReqAC, bedReq})=> {
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const authModal = () => {
    if (showAuthModal)
      return (
        <AuthModal
          logIn={logIn}
          showAuthModal={showAuthModalSyncWithAuthModalComponent}
          setBedReqAC={setBedReqAC}
          bedReq={bedReq}
        />
      );
  };
  const showAuthModalSyncWithAuthModalComponent = () => {
    setShowAuthModal(!showAuthModal);
  };
  return (
    <>
      {authModal()}
      <Button onClick={showAuthModalSyncWithAuthModalComponent}>Auth</Button>
    </>
  );
}
