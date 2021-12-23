import { createTheme } from '@mui/material/styles'

const createdTheme = createTheme({
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
