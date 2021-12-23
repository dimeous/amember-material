import React from 'react';

import { Box, Button, ListItem, Stack, Typography, List, ListItemText, ListItemIcon } from '@mui/material';
import theme from './theme';
import { ThemeProvider, makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  headBox: {
    display: 'flex',
    justifyContent: 'center',
    background: '#F6F8FA'
  },
  licensed: {
    '& span': {
      color: '#0085F9'
    }
  },
  download: {
    color: '#0085F9',
    align: 'center',
    padding: '32px 8px'
  },
  downloadBox: {
    border: '1px solid #E6ECEF',
    boxSizing: 'border-box',
    borderRadius: '8px',
    width: '621px',
    height: '212px',
    margin: 'auto'
  }
});

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Box className={classes.headBox}>
          <Box sx={{ py: 4 }}>
            <img
              src="../wp-content/themes/bookmap/assets/react/thankyou/thnk-ico.png"
              height={126}
              width={169}
              alt="Thank you"
            />
          </Box>
        </Box>
        <Box>
          <Typography variant={'h4'} align={'center'} sx={{ pt: 5, pb: 1, color: '#124258' }}>
            Thank you for signing up!
          </Typography>
          <Typography variant={'h5'} align={'center'} sx={{ pb: 4 }} className={classes.licensed}>
            You are licensed as <span>Ali_vai</span> and you password is <span>as chosen</span> on the signup page
          </Typography>
        </Box>
        <Box>
          <Box className={classes.downloadBox}>
            <Typography className={classes.download} variant={'h5'} align={'center'}>
              Download bookmap desktop to get started
            </Typography>
            <Box sx={{ justifyContent: 'center', display: 'flex' }}>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  startIcon={<img src={'/wp-content/themes/bookmap/assets/react/thankyou/windows.png'} />}
                  href={'https://bookmap.com/current/production'}>
                  DOWNLOAD
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<img src={'/wp-content/themes/bookmap/assets/react/thankyou/apple.png'} />}
                  href={'https://bookmap.com/current/beta/mac'}>
                  DOWNLOAD
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<img src={'/wp-content/themes/bookmap/assets/react/thankyou/linux.png'} />}
                  href={'https://bookmap.com/current/beta/linux'}>
                  DOWNLOAD
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box className={classes.downloadBox} sx={{ mt: 5, height: 'auto' }}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <img
                    src="../wp-content/themes/bookmap/assets/react/thankyou/mail-ico.png"
                    height={20}
                    width={22}
                    alt="Email"
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Check Your Email"
                  secondary={
                    'We will be sending you helpful resources in the coming days for starting with the Bookmap basics and advancing to how professional traders use Bookmap as an essential tool for viewingmarket liquidity.'
                  }
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
