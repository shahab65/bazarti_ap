import { createMuiTheme } from "@material-ui/core/styles";

// palette
import palette from "./palette";

// typography
import typography from "./typography";

export default createMuiTheme({
  direction: "rtl",
  palette,
  typography,
  overrides: {
    MuiCard: {
      root: {
        boxShadow: "0 0 1rem rgba(0,0,0,0.05)"
      }
    }
  }
});
