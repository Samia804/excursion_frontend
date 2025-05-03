import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  Paper,
} from "@mui/material";
import StepIndicator from "../components/StepIndicator";

const Checkout = () => {
  const navigate = useNavigate(); // ✅ move this INSIDE the component

  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 6 }}>
      <StepIndicator currentStep={2} />

      <Paper sx={{ backgroundColor: "#edf4f5", p: 4, mb: 5 }}>
        <Typography variant="h6" fontWeight="bold" color="#894e06">
          Payment Options
        </Typography>
        <Typography color="#177991" mt={1} mb={2}>
          Choose Your Payment Method:
        </Typography>
        <Typography>1. Pay in Full – Confirm your trip instantly</Typography>
        <Typography mb={2}>
          2. Pay 50% Now & 50% Later – Secure your spot with a deposit
        </Typography>

        <Typography fontWeight="bold" color="#894e06" mb={1}>
          Accepted Payment Methods:
        </Typography>
        <ul style={{ paddingLeft: 16 }}>
          <li>Bank Transfer</li>
          <li>JazzCash</li>
          <li>Easypaisa</li>
          <li>PayFast</li>
          <li>Cash on Arrival</li>
        </ul>
        <Typography variant="caption" color="text.secondary" mt={1}>
          🔒 All payments are securely processed.
        </Typography>
      </Paper>

      <Typography variant="h5" color="#894e06" mb={2}>
        Payment Form Section
      </Typography>

      <Typography color="#0c7a78" fontWeight="bold" mb={1}>
        Bank Transfer :
      </Typography>
      <Box mb={3}>
        <Typography variant="body2">
          <strong>Account Title:</strong> Excursion Travel & Tours <br />
          <strong>Account Number:</strong> 1234-5678-9012-3456 <br />
          <strong>IBAN:</strong> PK30MEZN0000000000000001 <br />
          <strong>Branch:</strong> Blue Area, Islamabad (Code: 1234) <br />
          <strong>SWIFT Code:</strong> MEZNPkka <br />
          <strong>Important:</strong> Email receipt and Booking ID to{" "}
          <a href="mailto:payments@excursion.com">
            payments@excursion.com
          </a>
        </Typography>
      </Box>

      <Typography color="#177991" fontWeight="bold" mb={1}>
        JazzCash / Easypaisa
      </Typography>
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Mobile Number"
            fullWidth
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Button variant="contained" fullWidth sx={{ height: "40px" }}>
            Send OTP
          </Button>
        </Grid>
        <Grid item xs={6} md={3}>
          <Button variant="contained" fullWidth sx={{ height: "40px" }}>
            Enter OTP
          </Button>
        </Grid>
      </Grid>

      <Typography color="#177991" fontWeight="bold" mb={1}>
        PayFast
      </Typography>
      <Button
        variant="contained"
        fullWidth
        sx={{ backgroundColor: "#247a7e", mb: 3 }}
      >
        Redirect to Secure PayFast Gateway
      </Button>

      <Typography color="#177991" fontWeight="bold" mb={1}>
        Cash in Office
      </Typography>
      <Typography variant="body2" mb={2}>
        Visit our Islamabad Office for cash payments
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#4d5e94", mb: 4 }}
      >
        Open in Google Maps
      </Button>

      <Paper sx={{ p: 3, border: "1px solid #eee", mb: 4 }}>
        <Typography variant="h6" color="#894e06" mb={2}>
          Billing and Contact Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Address" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Country" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Province" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="City" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Contact Number" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Emergency Contact Number" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Zip Code" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField label="Confirm Email Address" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button fullWidth sx={{ height: "40px", backgroundColor: "#247a7e", color: "white" }}>
              See Travel Guidelines
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Button
        variant="contained"
        fullWidth
        sx={{ backgroundColor: "#2fbf4c", fontWeight: "bold", fontSize: "1rem" }}
        onClick={() => navigate("/confirmation")}
      >
        Confirm and Book
      </Button>
    </Box>
  );
};

export default Checkout;
