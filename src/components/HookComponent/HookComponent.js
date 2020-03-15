import React from "react";
import Button from "@material-ui/core/Button";

import useStyles from "./style";

const HookComponent = props => {
  // Получаем функцию для генерации классов
  const classes = useStyles();

  return <Button className={classes.button}>HookComponent</Button>;
};

export default HookComponent;