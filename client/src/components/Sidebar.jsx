import React, { useState, useContext } from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import { Phone, PhoneOff } from "react-feather";
import { makeStyles } from "@material-ui/core/styles";

import { SocketContext } from "../Context";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  gridContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
}));

const Sidebar = ({ children }) => {
  const { callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12}>
          {callAccepted && !callEnded ? (
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<PhoneOff fontSize="large" />}
              onClick={leaveCall}
              className={classes.margin}
            >
              Hang Up
            </Button>
          ) : (
            <div>
              <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                variant="outlined"
                label="ID to call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <Button
                      variant="contained"
                      onClick={() => callUser(idToCall)}
                      color="primary"
                    >
                      <Phone />
                    </Button>
                  ),
                }}
              />
            </div>
          )}
        </Grid>
      </Grid>
      {children}
    </>
  );
};

export default Sidebar;
