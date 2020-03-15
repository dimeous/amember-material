import React from "react";

import useStyles from "./style";

const ThemedComponent = props => {
    // Получаем функцию для генерации классов
  const classes = useStyles();

  return <button className={classes.button}>ThemedComponent</button>;
};

export default ThemedComponent;
