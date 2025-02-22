import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function Profile() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <TextField fullWidth label="Name" margin="normal" />
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Phone" margin="normal" />
      <Button variant="contained" color="primary">
        Save Changes
      </Button>
    </Container>
  );
}

export default Profile;