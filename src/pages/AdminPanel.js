import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function AdminPanel() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Panel
      </Typography>
      <Typography variant="body1">
        Manage users, trips, and reviews here.
      </Typography>
      <Button variant="contained" color="primary">
        Manage Users
      </Button>
      <Button variant="contained" color="primary">
        Manage Trips
      </Button>
      <Button variant="contained" color="primary">
        Manage Reviews
      </Button>
    </Container>
  );
}

export default AdminPanel;