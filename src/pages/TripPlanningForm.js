import React, { useState } from "react";
import {
  Box, Button, Grid, Paper, TextField, Typography,
  Select, MenuItem, FormControl, InputLabel
} from "@mui/material";
import OperatorSidebar from "../components/OperatorSidebar";
import { useNavigate } from "react-router-dom";

const TripPlanningForm = () => {
  const navigate = useNavigate();

  const [tripName, setTripName] = useState("");
  const [destination, setDestination] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [transport, setTransport] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [features, setFeatures] = useState("");
  const [meals, setMeals] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [images, setImages] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = () => {
    if (
      !tripName || !destination || !accommodation || !transport || !startDate ||
      !endDate || !itinerary || !features || !meals || !pickup || !dropoff || images.length === 0
    ) {
      alert("Please fill in all fields and upload at least one image.");
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      alert("Start date cannot be after end date.");
      return;
    }

    // Submit logic to backend here later
    setSuccess(true);
  };

  if (success) {
    return (
      <Box sx={{ display: "flex" }}>
        <OperatorSidebar />
        <Box sx={{ ml: "240px", p: 4, width: "100%" }}>
          <Paper elevation={3} sx={{ p: 5, textAlign: "center" }}>
            <Typography variant="h5" color="green" gutterBottom>
              Trip uploaded successfully!
            </Typography>
            <Button variant="contained" onClick={() => navigate("/operator-dashboard")} sx={{ mt: 2, backgroundColor: "#247a7e" }}>
              Back to Dashboard
            </Button>
          </Paper>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex" }}>
      <OperatorSidebar />
      <Box sx={{ ml: "240px", p: 4, width: "100%" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#894e06", mb: 3 }}>
          Trip Planning Form
        </Typography>

        <Paper elevation={3} sx={{ p: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth required label="Trip Name" value={tripName} onChange={(e) => setTripName(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth required label="Destination Name" value={destination} onChange={(e) => setDestination(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Accommodation Type</InputLabel>
                <Select value={accommodation} onChange={(e) => setAccommodation(e.target.value)}>
                  <MenuItem value="Hotel">Hotel</MenuItem>
                  <MenuItem value="Resort">Resort</MenuItem>
                  <MenuItem value="Camping">Camping</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Transport Type</InputLabel>
                <Select value={transport} onChange={(e) => setTransport(e.target.value)}>
                  <MenuItem value="Car">Car</MenuItem>
                  <MenuItem value="Jeep">Jeep</MenuItem>
                  <MenuItem value="Bus">Bus</MenuItem>
                  <MenuItem value="Coaster">Coaster</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth required type="date" label="Start Date"
                InputLabelProps={{ shrink: true }} value={startDate}
                onChange={(e) => setStartDate(e.target.value)} inputProps={{ min: new Date().toISOString().split("T")[0] }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth required type="date" label="End Date"
                InputLabelProps={{ shrink: true }} value={endDate}
                onChange={(e) => setEndDate(e.target.value)} inputProps={{ min: new Date().toISOString().split("T")[0] }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={3} required label="Trip Plan / Itinerary" value={itinerary} onChange={(e) => setItinerary(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={2} required label="Top Features" value={features} onChange={(e) => setFeatures(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={2} required label="Accommodation and Meals" value={meals} onChange={(e) => setMeals(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth required label="Meeting & Pickup Point" value={pickup} onChange={(e) => setPickup(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth required label="Drop-off Point" value={dropoff} onChange={(e) => setDropoff(e.target.value)} />
            </Grid>

            {/* Image Upload and Preview */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>Upload Images</Typography>
              <input type="file" multiple onChange={handleImageUpload} />
              <Box sx={{ display: "flex", gap: 2, mt: 2, flexWrap: "wrap" }}>
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={URL.createObjectURL(img)}
                    alt={`trip-img-${idx}`}
                    width={120}
                    height={80}
                    style={{ objectFit: "cover", borderRadius: 8 }}
                  />
                ))}
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Button fullWidth variant="contained" sx={{ backgroundColor: "#247a7e", mt: 2 }} onClick={handleSubmit}>
                Submit Trip
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default TripPlanningForm;