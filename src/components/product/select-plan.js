import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';
const plans = [
  {
    planName: 'Global Monthly',
    price: '49',
    currency: 'EUR',
    term: '/month'
  },
  {
    planName: 'Global Yearly',
    price: '39',
    totalPrice: '468',
    totalText: '/total upfront payment',
    currency: 'EUR',
    term: '/month'
  },
  {
    planName: 'Global lifetime',
    price: '900',
    currency: 'EUR',
    term: '/Lifetime'
  }
];

const SelectPlan = () => (
  <Box>
    {plans.map((v, index) => (
      <ButtonBase key={index}>
        <Box className={'price-box'}>
          <Box className={'price-title'}>
            <span>{v.planName}</span>
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
export default SelectPlan;
