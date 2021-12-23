import React from 'react';

import { ThemeProvider } from "@mui/material";

import  JssComponent from './JssComponent/JssComponent';
import  ClassComponent from './ClassComponent/ClassComponent';
import  HookComponent from './HookComponent/HookComponent';
import  StyledComponent from './StyledComponent/StyledComponent';
import  ThemedComponent from './ThemedComponent/ThemedComponent';
import theme from './theme';
import CreatedThemeComponent from './CreatedThemeComponent/CreatedThemeComponent';
import createdTheme from './createdTheme';

import useStyles from './style';
const WrapperComponent = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>Button Components:</div>
      {props.children}
    </div>
  )
}

function App() {
  return (
    <React.Fragment>
      <JssComponent /><br />

      <WrapperComponent>
        <ClassComponent /><br />
        <HookComponent /><br />
        <StyledComponent /><br />

        <ThemeProvider theme={theme}>
          < ThemedComponent />
        </ThemeProvider><br />

        <ThemeProvider theme={createdTheme}>
          < CreatedThemeComponent />
        </ThemeProvider>
      </WrapperComponent>
    </React.Fragment>
  );
}

export default App;
