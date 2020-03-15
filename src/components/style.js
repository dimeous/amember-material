import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
      border: '1px solid grey',
      width: '80%',
      margin: '0px auto',
      "& div": {
          textIndent: 10
      }
  }
});

export default useStyles;
