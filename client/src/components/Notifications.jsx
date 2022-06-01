import React, { useContext } from "react";
import { Button, Snackbar } from "@material-ui/core";

import { SocketContext } from "../Context";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <Snackbar
      open={call.isReceivingCall && !callAccepted}
      autoHideDuration={1000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      message={`${call.name} is calling:`}
      action={
        <Button variant="contained" color="primary" onClick={answerCall}>
          Answer
        </Button>
      }
    />
  );
};

export default Notifications;
