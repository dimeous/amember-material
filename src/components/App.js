import React from 'react';

import { Box, Button, Typography, FormControl, Select, MenuItem, Divider, TextField } from '@mui/material';
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
            <Typography>What asset class do you trade?</Typography>
            <Button variant="outlined">Crypto</Button>
            <Button variant="outlined">Futures</Button>
            <Button variant="outlined">Stocks</Button>
            <Typography variant={'h3'}>Personal Information</Typography>
            <Typography>If you have an account, please login here.</Typography>
            <input type="checkbox" value="crypto" name="assets_raded[]" id="qfauto-2" />
            <input type="checkbox" value="futures" name="assets_raded[]" id="qfauto-3" />
            <input type="checkbox" value="equities" name="assets_raded[]" id="qfauto-4" />
            <TextField id="name_f" name="name_f" label="First Name" variant="outlined" />
            <TextField id="name_l" name="name_l" label="Last Name" variant="outlined" />
            <TextField id="email-0" name="email" label="Email" variant="outlined" />
            <TextField id="pass-0" name="pass" label="Password" type={'password'} variant="outlined" />
            <TextField id="phone-0" name="phone" label="Telephone" variant="outlined" />
            <TextField id="phone-0" name="phone" label="Telephone" variant="outlined" />
            <TextField id="tax_id-0" name="tax_id" label="EU VAT ID (Optional)" variant="outlined" />

            <Divider />
            <input
              type="radio"
              name="paysys_id"
              data-recurring="true"
              checked="checked"
              value="stripe"
              id="paysys_id---0"
            />
            <input type="radio" name="paysys_id" data-recurring="true" value="paypal" id="paysys_id---1" />
          </Box>
          <Box></Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
