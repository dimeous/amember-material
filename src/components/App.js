import React from 'react';

import {
  Box,
  Button,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Divider,
  TextField,
  ButtonBase,
  Grid
} from '@mui/material';
import { ThemeProvider, makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import './product-select.css';
import './mui-theme.css';
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
  const [paysystem, setPaysystem] = React.useState('stripe');
  const [tradeAssets, setTradeAssets] = React.useState([false, false, false]);
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handlePaysystem = (value) => {
    setPaysystem(value);
  };
  const handleAssetsTrade = (value) => {
    const newItems = [...tradeAssets];
    newItems[value] = !tradeAssets[value];
    setTradeAssets(newItems);
  };

  const payments = ['stripe', 'paypal'];
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Box className={classes.headBox}>
          <Box sx={{ py: 4 }}>
            <Box>
              <Button
                variant="text"
                startIcon={
                  tradeAssets[0] ? (
                    <img src={'/wp-content/themes/bookmap/assets/react/product/table-fill.png'} />
                  ) : undefined
                }>
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
        <Grid container>
          <Grid md={9} item>
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
              <div className={'checkboxes'}>
                <Typography>What asset class do you trade?</Typography>
                <Button
                  variant="outlined"
                  onClick={() => handleAssetsTrade(0)}
                  startIcon={tradeAssets[0] && <span className="material-icons main-text">check_circle</span>}>
                  Crypto
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => handleAssetsTrade(1)}
                  startIcon={tradeAssets[1] && <span className="material-icons main-text">check_circle</span>}>
                  Futures
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => handleAssetsTrade(2)}
                  startIcon={tradeAssets[2] && <span className="material-icons main-text">check_circle</span>}>
                  Stocks
                </Button>
                <input type="checkbox" value="crypto" name="assets_raded[]" id="qfauto-2" checked={tradeAssets[0]} />
                <input type="checkbox" value="futures" name="assets_raded[]" id="qfauto-3" checked={tradeAssets[1]} />
                <input type="checkbox" value="equities" name="assets_raded[]" id="qfauto-4" checked={tradeAssets[2]} />
              </div>
              <Typography variant={'h3'}>Personal Information</Typography>
              <Typography>If you have an account, please login here.</Typography>
              <Divider />
              <Box
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' }
                }}>
                <TextField id="name_f" name="name_f" label="First Name" variant="outlined" />
                <TextField id="name_l" name="name_l" label="Last Name" variant="outlined" />
                <TextField id="email-0" name="email" label="Email" variant="outlined" />
                <TextField id="pass-0" name="pass" label="Password" type={'password'} variant="outlined" />
                <TextField id="phone-0" name="phone" label="Telephone" variant="outlined" />
                <TextField id="phone-0" name="phone" label="Telephone" variant="outlined" />
                <TextField id="tax_id-0" name="tax_id" label="EU VAT ID (Optional)" variant="outlined" />
              </Box>
              <Divider />
            </Box>
            <Box>
              <input type="hidden" name="paysys_id" data-recurring="true" value="stripe" id="paysys_id---1" />
              {payments.map((value) => (
                <ButtonBase onClick={() => handlePaysystem(value)} key={value}>
                  <Box className={'payment-system'}>
                    <Typography component={'div'} className={'paysystem-title'}>
                      {paysystem == value ? (
                        <span className="material-icons main-text">check_circle</span>
                      ) : (
                        <span className="material-icons grey-text ">radio_button_unchecked</span>
                      )}
                      <div className={'pay-with MuiTypography-h4'}>
                        Pay with {value == 'paypal' ? 'Paypal' : 'card'}
                      </div>
                    </Typography>
                    <img src={'/wp-content/themes/bookmap/assets/react/product/' + value + '.png'}></img>
                  </Box>
                </ButtonBase>
              ))}
            </Box>
            <Divider />
            <input type="submit" value="Next" className="am-cta-signup" name="_qf_page-0_next" id="_qf_page-0_next-0" />
            <Divider />
          </Grid>
          <Grid md={3} item>
            <Box className={'order-summary'}>
              <Typography variant={'h3'}>Order Summary</Typography>
              <Grid container>
                <Grid item xs={9}>
                  <Typography>Bookmap Global Yearly</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography align={'right'}>548 EUR</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={9}>
                  <Typography>VAT</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography align={'right'}>548 EUR</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={9}>
                  <Typography>Sub-total</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography align={'right'}>548 EUR</Typography>
                </Grid>
              </Grid>
              <Divider />
              <Grid container>
                <Grid item xs={9}>
                  <Typography>Total</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography align={'right'}>548 EUR</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
