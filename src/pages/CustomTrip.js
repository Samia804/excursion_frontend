// CustomTrip.js

import React from 'react';
import {
  Box, Grid, Typography, TextField, FormControl, FormControlLabel, FormLabel,
  RadioGroup, Radio, Checkbox, Button, Paper, Divider
} from '@mui/material';

const CustomTrip = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: "#f5f5f5" }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 1000, mx: "auto" }}>
        <Typography variant="h5" gutterBottom>Custom Trip Form</Typography>

        {/* Traveler Info */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Traveler Name" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Email" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Phone" /></Grid>
          <Grid item xs={6} sm={3}><TextField fullWidth label="Number of Adults" /></Grid>
          <Grid item xs={6} sm={3}><TextField fullWidth label="Number of Children" /></Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Trip Details */}
        <Typography variant="h6">Trip Details & Preferences</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Destination" /></Grid>
          <Grid item xs={6} sm={3}><TextField fullWidth label="Start Date" type="date" InputLabelProps={{ shrink: true }} /></Grid>
          <Grid item xs={6} sm={3}><TextField fullWidth label="End Date" type="date" InputLabelProps={{ shrink: true }} /></Grid>
          <Grid item xs={12}><TextField fullWidth label="Pickup Location" /></Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Accommodation */}
        <FormControl component="fieldset">
          <FormLabel component="legend">Accommodation Type</FormLabel>
          <RadioGroup row>
            <FormControlLabel value="hotel" control={<Radio />} label="Hotel" />
            <FormControlLabel value="resort" control={<Radio />} label="Resort" />
            <FormControlLabel value="camping" control={<Radio />} label="Camping" />
          </RadioGroup>
        </FormControl>

        {/* Meal */}
        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <FormLabel component="legend">Meal Preferences</FormLabel>
          <FormControlLabel control={<Checkbox />} label="Vegetarian" />
          <FormControlLabel control={<Checkbox />} label="Non-Vegetarian" />
        </FormControl>

        {/* Transport */}
        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <FormLabel component="legend">Preferred Transport Mode</FormLabel>
          <Grid container>
            {["Car", "Van", "Jeep", "Coaster", "Bus"].map((mode) => (
              <Grid item xs={6} sm={4} key={mode}>
                <FormControlLabel control={<Checkbox />} label={mode} />
              </Grid>
            ))}
          </Grid>
        </FormControl>

        {/* Interests */}
        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <FormLabel component="legend">Travel Interests</FormLabel>
          <Grid container>
            {["Nature", "Adventure", "Historical Places", "Photography/Scenic Spots", "Culture"].map((interest) => (
              <Grid item xs={6} sm={4} key={interest}>
                <FormControlLabel control={<Checkbox />} label={interest} />
              </Grid>
            ))}
          </Grid>
        </FormControl>

        {/* Benefits */}
        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <FormLabel component="legend">Benefits</FormLabel>
          <Grid container>
            {["Insurance", "Tour Guide", "Meals", "Tickets", "Transport"].map((benefit) => (
              <Grid item xs={6} sm={4} key={benefit}>
                <FormControlLabel control={<Checkbox />} label={benefit} />
              </Grid>
            ))}
          </Grid>
        </FormControl>

        {/* Specific Places */}
        <Box sx={{ mt: 2 }}>
          <TextField fullWidth label="Any Specific Places to Visit?" multiline rows={2} />
        </Box>

        {/* Additional Requests */}
        <Divider sx={{ my: 3 }} />
        <Typography variant="h6">Additional Requests & Traveler Considerations</Typography>

        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <FormLabel component="legend">Are you:</FormLabel>
          <Grid container>
            {["Solo", "Couple", "With a group (school/company/etc.)"].map((opt) => (
              <Grid item xs={6} sm={4} key={opt}>
                <FormControlLabel control={<Checkbox />} label={opt} />
              </Grid>
            ))}
          </Grid>
        </FormControl>

        <Box sx={{ mt: 2 }}>
          <TextField fullWidth label="Other Requests/Feedback" multiline rows={3} />
        </Box>

        {/* Submit */}
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" color="primary">Submit</Button>
        </Box>

        {/* Footer Note */}
        <Divider sx={{ my: 3 }} />
        <Typography variant="caption">
          Once you submit this form, tour operators will view your request and send personalized trip plans.
        </Typography>
      </Paper>
    </Box>
  );
};

export default CustomTrip;
