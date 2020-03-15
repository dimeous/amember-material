import { createMuiTheme } from "@material-ui/core/styles";

const createdTheme = createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          color: "red",
          border: "1px solid grey",
          margin: 10
        }
      }
    }
  });
  
export default createdTheme;
