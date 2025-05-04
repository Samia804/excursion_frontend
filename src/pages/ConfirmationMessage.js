import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ConfirmationMessage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 6 }}>
      <Grid container spacing={4}>
        {/* Left: Message */}
        <Grid item xs={12} md={7}>
          <Paper sx={{ backgroundColor: "#edf4f5", p: 4 }}>
            <Typography variant="h5" fontWeight="bold" color="#894e06" mb={2}>
              Confirmation Message:
            </Typography>
            <Typography variant="body1" color="text.secondary">
              “Your payment has been successfully processed. A confirmation email has been sent to your registered email. You can check your booking details in the ‘My Trips’ section.”
            </Typography>
          </Paper>
        </Grid>

        {/* Right: Buttons */}
        <Grid item xs={12} md={5}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#247a7e" }}
              onClick={() => navigate("/")}
            >
              Cancel Payment & Go Back
            </Button>
            <Button
              variant="outlined"
              sx={{ borderColor: "#247a7e", color: "#247a7e" }}
              onClick={() => navigate("/trip-summary")}
            >
              Modify Booking Details
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConfirmationMessage;
