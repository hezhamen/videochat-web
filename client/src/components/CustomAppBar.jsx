import React, { useContext } from "react";
import { SocketContext } from "../Context";
import { Assignment, Videocam } from "@material-ui/icons";
import CopyToClipboard from "react-copy-to-clipboard";
import {
  Typography,
  Box,
  Chip,
  Divider,
  TextField,
  Button,
  Avatar,
  makeStyles,
  AppBar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid #2D2E30",
    padding: "1rem",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  appBarFirst: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logoContainer: {
    color: "#ffffff",
  },
}));

const CustomAppBar = () => {
  const { me } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <>
      <AppBar
        className={classes.appBar}
        position="static"
        color="transparent"
        elevation={0}
      >
        <div className={classes.appBarFirst} styles={{ borderRadius: "16px" }}>
          <Box
            sx={{
              backgroundColor: "#4092F6",
              width: "4rem",
              height: "4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "16px",
            }}
          >
            <Videocam fontSize="large" className={classes.logoContainer} />
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Typography variant="h5" align="center">
            Hezha Amen
          </Typography>
          <Chip label="00:00:00" />
        </div>
        <div className={classes.appBarFirst} styles={{ borderRadius: "16px" }}>
          <TextField
            variant="filled"
            value={me}
            InputProps={{
              endAdornment: (
                <CopyToClipboard text={me}>
                  <Button>
                    <Assignment />
                  </Button>
                </CopyToClipboard>
              ),
            }}
          />
          <Avatar></Avatar>
        </div>
      </AppBar>
    </>
  );
};

export default CustomAppBar;
