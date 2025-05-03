import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StepIndicator from "../components/StepIndicator";

const TripSummary = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 4 }}>
      <StepIndicator currentStep={1} />

      <Typography variant="h4" fontWeight="bold" color="#894e06" mb={3}>
        Naran Kaghan Adventure
      </Typography>

      <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" color="#894e06" mb={2}>Trip Summary</Typography>
        <Typography variant="body2" mb={1}><strong>Destination:</strong> Islamabad → Naran → Kaghan → Babusar → Islamabad</Typography>
        <Typography variant="body2" mb={1}><strong>Travel Dates:</strong> 15th June 2024 - 19th June 2024</Typography>
        <Typography variant="body2" mb={1}><strong>Travelers:</strong> 4</Typography>
        <Typography variant="body2" mb={1}><strong>Total Cost:</strong> PKR 42,500 per person</Typography>
        <Typography variant="body2" mb={3}><strong>Booking ID:</strong> #EXC-786PK2024</Typography>

        <Typography variant="h6" color="#894e06" mb={1}>Special Experiences:</Typography>
        <ul style={{ paddingLeft: "1.2rem" }}>
          <li>Boating at Saif-ul-Muluk Lake</li>
          <li>Jeep Safari to Babusar Top</li>
          <li>Rubab Night & Bonfire</li>
        </ul>
      </Paper>

      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h6" color="#894e06" mb={3}>Traveler Detail</Typography>

        <Paper sx={{ p: 2, backgroundColor: "#e7f4f5", mb: 2 }}>
          <Typography variant="body2">
            Enter details as per CNIC. Changes not allowed post-booking.
          </Typography>
        </Paper>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <input type="email" placeholder="Email Address" style={{ width: "100%", padding: "10px" }} />
          </Grid>

          <Grid item xs={12}>
            <Typography fontWeight="bold" mb={2}>Traveler 1: Adult</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <input type="text" placeholder="First Name" style={{ width: "100%", padding: "10px" }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <input type="text" placeholder="Middle Name" style={{ width: "100%", padding: "10px" }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <input type="text" placeholder="Last Name" style={{ width: "100%", padding: "10px" }} />
          </Grid>

          <Grid item xs={12} md={6}>
            <input type="text" placeholder="Date of Birth (DD/MM/YYYY)" style={{ width: "100%", padding: "10px" }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <select style={{ width: "100%", padding: "10px" }}>
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </Grid>
        </Grid>

        <Button variant="outlined" sx={{ mt: 3 }}>
          Add/Edit Travelers
        </Button>

        <Button
          variant="contained"
          sx={{ mt: 4, backgroundColor: "#e14a3c" }}
          fullWidth
          onClick={() => navigate("/checkout")}
        >
          Go to Checkout
        </Button>
      </Paper>
    </Box>
  );
};

export default TripSummary;
