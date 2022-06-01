import React, { useContext } from "react";
import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";

import { SocketContext } from "../Context";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    flexWrap: "nowrap",
  },
  videoContainer: {
    overflow: "hidden",
    aspectRatio: "16/9",
    borderRadius: "16px",
  },
  video: {
    width: "100%",
    display: "block",
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer} xs={12}>
      {stream && (
        <Grid
          item
          xs={callAccepted ? 6 : 12}
          className={!callAccepted && classes.videoContainer}
        >
          <video
            playsInline
            muted
            ref={myVideo}
            autoPlay
            className={classes.video}
          />
        </Grid>
      )}
      {callAccepted && !callEnded && (
        <Grid item xs={6} className={!callAccepted && classes.videoContainer}>
          <video
            playsInline
            ref={userVideo}
            autoPlay
            className={classes.video}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default VideoPlayer;
