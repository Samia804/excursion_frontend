// src/pages/CustomBookingSummary.js

import React, { useState } from "react";
import { Box, Typography, Paper, Button, Divider, List, ListItem, ListItemText, Modal, TextField, Snackbar, Alert } from "@mui/material";
import OperatorSidebar from "../components/OperatorSidebar";
import { useNavigate } from "react-router-dom";

const CustomBookingSummary = () => {
  const [open, setOpen] = useState(false);
  const [quote, setQuote] = useState("");
  const [contact, setContact] = useState("");
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setQuote("");
    setContact("");
  };

  const handleSubmit = () => {
    if (!quote || !contact) {
      alert("Please fill both fields!");
      return;
    }
    setSuccessSnackbar(true); // 🎉 Show success popup
    handleClose();
    setTimeout(() => {
      navigate("/operator-dashboard");
    }, 2500); // After 2.5 seconds, go back to dashboard
  };

  const formatNumber = (value) => {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <OperatorSidebar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, ml: { xs: 0, md: "240px" }, p: 4, backgroundColor: "#f9f9f9" }}>
        {/* Title */}
        <Typography variant="h5" fontWeight="bold" sx={{ color: "#6d3c1e", mb: 2 }}>
          Trip to Hunza
        </Typography>

        {/* Trip Info */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Trip Information</Typography>
          <Typography variant="body2">
            <strong>Trip Name:</strong> Hunza Family Adventure<br />
            <strong>Operator:</strong> XYZ Operator<br />
            <strong>Dates:</strong> 10-15 May 2025<br />
            <strong>Pickup:</strong> Islamabad Office<br />
            <strong>Drop-off:</strong> Excursionist Islamabad<br />
            <strong>Accommodation:</strong> 4-Star Hotels<br />
            <strong>Transport:</strong> Coaster, Local Jeep<br />
            <strong>Activities:</strong> Sightseeing, Boating, Hiking<br />
            <strong>Budget Range:</strong> PKR 35,000 - 100,000<br />
            <strong>Note:</strong> Family trip, prefers eco-friendly hotels.
          </Typography>
          <Button
            sx={{ mt: 2, backgroundColor: "#247a7e" }}
            variant="contained"
          >
            Download Trip Details as PDF
          </Button>
        </Paper>

        {/* Process Steps */}
        <Typography variant="h6" fontWeight="bold" sx={{ color: "#6d3c1e", mb: 2 }}>
          Next Steps After Reviewing the Custom Trip Request
        </Typography>

        <Paper elevation={2} sx={{ p: 3 }}>
          <List>
            <ListItem>
              <ListItemText
                primary="1. Evaluate the Request"
                secondary="Carefully assess trip details (dates, preferences, budget, travelers). Review accommodation & transportation."
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="2. Submit Your Bid by Sending an Email"
                secondary="Mention all trip details clearly: budget, transportation, inclusions, etc."
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="3. Customer Response & Negotiation"
                secondary="Customer will approve, reject, or negotiate after reviewing the bid."
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="4. Confirmation & Payment Process"
                secondary="Once accepted, the customer pays 50% upfront, and remaining at trip start."
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="5. Final Booking Confirmation"
                secondary="Customer receives final itinerary & tickets once payment is complete."
              />
            </ListItem>
          </List>
          <Typography variant="caption" sx={{ mt: 2, display: "block" }}>
            For assistance, email: <strong>support@excursionist.com</strong>
          </Typography>
        </Paper>

        {/* Bid Button */}
        <Box sx={{ textAlign: "right", mt: 3 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#247a7e" }}
            onClick={handleOpen}
          >
            Bid to This Request
          </Button>
        </Box>

        {/* Bid Modal */}
        <Modal open={open} onClose={handleClose}>
          <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 350,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Submit Your Bid
            </Typography>

            {/* Quote Field */}
            <TextField
              fullWidth
              label="Quote Amount (in PKR)"
              value={quote}
              onChange={(e) => setQuote(formatNumber(e.target.value))}
              placeholder="Enter your quote"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              sx={{ mb: 2 }}
              required
            />

            {/* Contact Number Field */}
            <TextField
              fullWidth
              label="Contact Number"
              value={contact}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 11) {
                  setContact(value);
                }
              }}
              placeholder="03XXXXXXXXX"
              inputProps={{ maxLength: 11 }}
              sx={{ mb: 2 }}
              required
            />

            {/* Modal Buttons */}
            <Button
              variant="contained"
              fullWidth
              sx={{ mb: 1, backgroundColor: "#247a7e" }}
              onClick={handleSubmit}
            >
              Submit Bid
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Modal>

        {/* Success Snackbar */}
        <Snackbar
          open={successSnackbar}
          autoHideDuration={2500}
          onClose={() => setSuccessSnackbar(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={() => setSuccessSnackbar(false)} severity="success" sx={{ width: '100%' }}>
            🎉 Bid Submitted Successfully!
          </Alert>
        </Snackbar>

      </Box>
    </Box>
  );
};

export default CustomBookingSummary;
