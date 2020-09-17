import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "grommet";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      variant="primary"
      className="btn-margin"
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
