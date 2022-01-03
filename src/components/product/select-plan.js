import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';
const plans = [
  {
    id: '101-104',
    planName: 'Global Monthly',
    price: '49',
    currency: 'EUR',
    term: '/month'
  },
  {
    id: '107-108',
    planName: 'Global Yearly',
    price: '39',
    totalPrice: '468',
    totalText: '/total upfront payment',
    currency: 'EUR',
    term: '/month'
  },
  {
    id: '109-110',
    planName: 'Global lifetime',
    price: '900',
    currency: 'EUR',
    term: '/Lifetime'
  }
];

const SelectPlan = () => {
  const [plan, setPlan] = React.useState('104-104');
  const handleSetPlan = (value) => {
    setPlan(value);
  };
  return (
    <Box>
      {plans.map((v, index) => (
        <ButtonBase
          key={index}
          onClick={() => handleSetPlan(v.id)}
          className={v.id == plan ? 'plan-box active-plan' : 'plan-box'}>
          <Box className={'price-box'}>
            <Box className={'price-title'}>
              <span>{v.planName}</span>
              {v.id == plan && (
                <div className={'check-plan'}>
                  <i className="material-icons">check_circle</i>
                </div>
              )}
            </Box>
            <Box className={'plan-price-box'}>
              <span className={'price-val'}>
                {v.price} {v.currency}
              </span>
              <span className={'price-period'}>{v.term}</span>
            </Box>
            <Typography component={'div'} className={'data-not-included'} sx={{ ml: 3 }}>
              Data not included
            </Typography>
          </Box>
        </ButtonBase>
      ))}
    </Box>
  );
};
export default SelectPlan;
