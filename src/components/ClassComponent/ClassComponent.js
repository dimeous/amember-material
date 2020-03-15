import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "./style";

class ClassComponent extends React.Component {
  render() {
  
    const { classes } = this.props;

    return <Button className={classes.button}>ClassComponent</Button>;
  }
}

// Опрокидываем в пропс метод для генерации классов
export default withStyles(styles)(ClassComponent);
