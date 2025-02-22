import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function TripDetails() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Trip Details
      </Typography>
      <Typography variant="body1">
        Destination: Hunza Valley
      </Typography>
      <Typography variant="body1">
        Price: $200
      </Typography>
      <Button variant="contained" color="primary">
        Book Now
      </Button>
    </Container>
  );
}

export default TripDetails;