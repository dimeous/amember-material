import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
  return {
    button: { ...theme.button, margin: 10 }
  };
});

export default useStyles;
