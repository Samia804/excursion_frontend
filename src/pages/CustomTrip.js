import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

function CustomTrip() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create a Custom Trip
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Destination" margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Duration (Days)" margin="normal" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Description" margin="normal" multiline rows={4} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CustomTrip;