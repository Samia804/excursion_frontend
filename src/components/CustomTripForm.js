import React from 'react';
import {
  Box, Grid, Typography, TextField, FormControl, FormControlLabel, FormLabel,
  RadioGroup, Radio, Checkbox, Button, Paper, Divider
} from '@mui/material';
import backgroundImage from '../assets/formbg.png'; // Replace with your actual image path

const CustomTripForm = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        py: 8,
        px: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}
    >
      <Paper elevation={6} sx={{ p: 5, maxWidth: 1000, width: '100%', bgcolor: 'rgba(255,255,255,0.95)', borderRadius: 3 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: '#7A3F1D', fontWeight: 'bold' }} // This is the brown shade from your image
            >
            Custom Trip Form
        </Typography>

        {/* Traveler Info */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Traveler Name" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Email" type="email" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Phone" required />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField fullWidth label="Number of Adults" type="number" required />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField fullWidth label="Number of Children" type="number" required />
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Trip Details */}
        <Typography variant="h6" gutterBottom sx={{ color: '#7A3F1D' }}>Trip Details & Preferences</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Destination" required />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField fullWidth label="Start Date" type="date" InputLabelProps={{ shrink: true }} required />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField fullWidth label="End Date" type="date" InputLabelProps={{ shrink: true }} required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Pickup Location" required />
          </Grid>
        </Grid>

        {/* Accommodation */}
        <FormControl required sx={{ mt: 3 }}>
          <FormLabel>Accommodation Type</FormLabel>
          <RadioGroup row>
            <FormControlLabel value="hotel" control={<Radio />} label="Hotel" />
            <FormControlLabel value="resort" control={<Radio />} label="Resort" />
            <FormControlLabel value="camping" control={<Radio />} label="Camping" />
          </RadioGroup>
        </FormControl>

        {/* Meal */}
        <FormControl sx={{ mt: 2 }}>
          <FormLabel>Meal Preferences</FormLabel>
          <FormControlLabel control={<Checkbox />} label="Vegetarian" />
          <FormControlLabel control={<Checkbox />} label="Non-Vegetarian" />
        </FormControl>

        {/* Transport */}
        <FormControl sx={{ mt: 2 }}>
          <FormLabel>Preferred Transport Mode</FormLabel>
          <Grid container spacing={1}>
            {["Car", "Van", "Jeep", "Coaster", "Bus"].map((mode) => (
              <Grid item xs={6} sm={4} key={mode}>
                <FormControlLabel control={<Checkbox />} label={mode} />
              </Grid>
            ))}
          </Grid>
        </FormControl>

        {/* Interests */}
        <FormControl sx={{ mt: 2 }}>
          <FormLabel>Travel Interests</FormLabel>
          <Grid container spacing={1}>
            {["Nature", "Adventure", "Historical Places", "Photography/Scenic Spots", "Culture"].map((interest) => (
              <Grid item xs={6} sm={4} key={interest}>
                <FormControlLabel control={<Checkbox />} label={interest} />
              </Grid>
            ))}
          </Grid>
        </FormControl>

        {/* Specific Places */}
        <Box sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Any Specific Places to Visit?"
            multiline
            rows={2}
            required
          />
        </Box>

        {/* Additional Requests */}
        <Box sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Other Requests or Comments"
            multiline
            rows={3}
            required
          />
        </Box>

        {/* Submit Button */}
        <Box sx={{ mt: 4 }}>
            <Button
                variant="contained"
                size="large"
                sx={{ bgcolor: '#247a7e', px: 4, '&:hover': { bgcolor: '#1e676f' } }}
                >
                Submit
            </Button>
        </Box>

        {/* Footer Note */}
        <Typography variant="caption" display="block" sx={{ mt: 3 }}>
          After submitting, our tour operators will contact you with personalized trip options.
        </Typography>
      </Paper>
    </Box>
  );
};

export default CustomTripForm;
