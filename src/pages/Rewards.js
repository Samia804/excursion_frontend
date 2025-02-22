import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function Rewards() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Rewards
      </Typography>
      <Typography variant="body1">
        You have 1000 reward points.
      </Typography>
      <Button variant="contained" color="primary">
        Redeem Points
      </Button>
    </Container>
  );
}

export default Rewards;