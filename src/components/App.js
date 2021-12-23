import React from 'react';

import { Box, Button, Typography, FormControl, Select, MenuItem } from '@mui/material';
import { ThemeProvider, makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import './product-select.css';
import SelectPlan from './product/select-plan';

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

const theme = createTheme({
  palette: {
    primary: {
      main: '#124258'
    },
    secondary: {
      main: '#0085F9'
    }
  }
});

function App() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('USD');
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Box className={classes.headBox}>
          <Box sx={{ py: 4 }}>
            <Box>
              <Button
                variant="text"
                startIcon={<img src={'/wp-content/themes/bookmap/assets/react/product/table-fill.png'} />}>
                Package
              </Button>
              <Button
                variant="text"
                startIcon={<img src={'/wp-content/themes/bookmap/assets/react/product/book-read-fill.png'} />}>
                Details
              </Button>
              <Button
                variant="text"
                startIcon={<img src={'/wp-content/themes/bookmap/assets/react/product/bank-card-fill.png'} />}>
                Payment
              </Button>
            </Box>
            <Box>
              <img src={'/wp-content/themes/bookmap/assets/react/product/radio-button-line.svg'} />
              <img src={'/wp-content/themes/bookmap/assets/react/product/radio-button-line.svg'} />
              <img src={'/wp-content/themes/bookmap/assets/react/product/focus-line.svg'} />
            </Box>
          </Box>
        </Box>
        <Box>
          <Box>
            <Box sx={{ display: 'inline' }}>
              <Typography display={'inline'}>Choose your billing cycle for Global package</Typography>
              <FormControl marginNormal>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={currency}
                  onChange={handleChange}>
                  <MenuItem value={'USD'}>USD</MenuItem>
                  <MenuItem value={'EUR'}>EUR</MenuItem>
                  <MenuItem value={'GPB'}>GPB</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <SelectPlan />
          </Box>
          <Box></Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
