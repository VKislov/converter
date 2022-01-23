import { useState } from "react";
import { Button } from "react-bootstrap";
import { AuthModal } from "./AuthModal";

export function Auth(props) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const authModal = () => {
    if (showAuthModal)
      return (
        <AuthModal
          logIn={props.logIn}
          showAuthModal={showAuthModalSyncWithAuthModal}
        />
      );
  };
  const showAuthModalSyncWithAuthModal = () => {
    setShowAuthModal(!showAuthModal);
  };
  return (
    <>
      {authModal()}
      <Button onClick={showAuthModalSyncWithAuthModal}>Auth</Button>
    </>
  );
}
