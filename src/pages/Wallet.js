import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function Wallet() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Wallet
      </Typography>
      <Typography variant="body1">
        Your current balance: $500
      </Typography>
      <Button variant="contained" color="primary">
        Add Funds
      </Button>
    </Container>
  );
}

export default Wallet;