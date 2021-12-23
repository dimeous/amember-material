import React from "react";
import { withStyles } from "@mui/styles";
import Button from "@mui/material/Button";

import styles from "./style";

class ClassComponent extends React.Component {
  render() {
  
    const { classes } = this.props;

    return <Button className={classes.button}>ClassComponent</Button>;
  }
}

export default withStyles(styles)(ClassComponent);
