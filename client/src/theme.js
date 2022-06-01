import { createTheme } from "@material-ui/core";

export const themeOptions = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#4092F6",
    },
    secondary: {
      main: "#CB554B",
    },
    background: {
      default: "#1b1b1d",
      paper: "#2D2E30",
    },
    error: {
      main: "#CB554B",
    },
    divider: "#2D2E30",
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
});
