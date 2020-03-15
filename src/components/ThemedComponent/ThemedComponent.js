import React from "react";

import useStyles from "./style";

const ThemedComponent = props => {
  const classes = useStyles();

  return <button className={classes.button}>ThemedComponent</button>;
};

export default ThemedComponent;
