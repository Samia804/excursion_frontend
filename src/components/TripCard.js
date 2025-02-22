import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

function TripCard({ trip }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={trip.image}
        alt={trip.destination}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {trip.destination}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {trip.description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {trip.price}
        </Typography>
        <Button variant="contained" color="primary">
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
}

export default TripCard;