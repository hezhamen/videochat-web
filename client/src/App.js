import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomAppBar from "./components/CustomAppBar";

import VideoPlayer from "./components/VideoPlayer";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";

const useStyles = makeStyles(() => ({
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <CustomAppBar />
      <Grid
        container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Grid item xs={8}>
          <VideoPlayer />
        </Grid>
      </Grid>
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default App;
