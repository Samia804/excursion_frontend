import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Paper,
  Avatar,
  TextField,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import StarIcon from "@mui/icons-material/Star";

// Images
import mainImage from "../assets/main.png";
import thumb1 from "../assets/2.png";
import thumb2 from "../assets/3.png";
import thumb3 from "../assets/4.png";
import thumb4 from "../assets/5.png";
import mapImage from "../assets/1.png";

const TripOverview = () => {
  const navigate = useNavigate(); // To navigate to TripSummary

  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 6 }}>
      {/* Heading */}
      <Typography variant="h4" fontWeight="bold" color="#894e06" mb={2}>
        Naran Kaghan Adventure
      </Typography>

      {/* Tabs */}
      <Box mb={4} display="flex" flexWrap="wrap" gap={1}>
        {["Overview", "Day to day", "Route", "Inclusions", "Getting there", "Offered by"].map(
          (label, i) => (
            <Button
              key={i}
              variant="contained"
              sx={{
                backgroundColor: "#d4e4e6",
                color: "black",
                fontWeight: 500,
                borderRadius: 2,
                textTransform: "none",
              }}
            >
              {label}
            </Button>
          )
        )}
      </Box>

      {/* Main Content */}
      <Grid container spacing={4}>
        {/* Left Side */}
        <Grid item xs={12} md={8}>
          {/* Intro Text */}
          <Typography color="text.secondary" mb={3}>
            Maximize your trip to Naran Kaghan and immerse yourself in the breathtaking beauty
            of Pakistan’s northern paradise. Skip the stress of planning and explore the lush
            green valleys, glacial lakes, and towering peaks with a well-organized tour.
          </Typography>

          {/* Thumbnails + Main Image */}
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Box display="flex" flexDirection="column" gap={1}>
                {[thumb1, thumb2, thumb3, thumb4].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`thumb-${i}`}
                    style={{ width: "100%", borderRadius: 8 }}
                  />
                ))}
              </Box>
            </Grid>
            <Grid item xs={10}>
              <img
                src={mainImage}
                alt="Main Visual"
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
              />
            </Grid>
          </Grid>

          {/* Route and Plan */}
          <Grid container spacing={4} mt={5}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="bold" color="#894e06" mb={2}>
                Route
              </Typography>
              <img
                src={mapImage}
                alt="Map"
                style={{ width: "100%", borderRadius: 8 }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="bold" color="#894e06" mb={2}>
                Trip Plan
              </Typography>
              <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
                Pakistan – Naran Kaghan Tour <br />
                Start: Islamabad (Day 1) <br />
                Day 2: Balakot & Kiwai Waterfall <br />
                Day 3: Shogran & Siri Paye Meadows <br />
                Day 4: Saif-ul-Muluk Lake <br />
                Day 5: Lulusar Lake & Babusar Top <br />
                Day 6: Dudipatsar Lake (Optional Hike) <br />
                Day 7: Kaghan Valley Exploration <br />
                End: Islamabad (Day 7)
              </Typography>
            </Grid>
          </Grid>

          {/* Top Features */}
          <Box mt={6}>
            <Typography variant="h6" fontWeight="bold" color="#894e06" mb={2}>
              Top Features
            </Typography>
            <ul style={{ paddingLeft: "20px", color: "#555" }}>
              <li>Comfortable Stay: Cozy hotels and mountain views.</li>
              <li>Private Tour: Exclusively arranged with flexibility.</li>
              <li>Flexible Start Dates available year-round.</li>
              <li>Customizable Experience: Add activities like boating, safaris, etc.</li>
              <li>Suitable for groups, couples, and families.</li>
            </ul>
          </Box>

          {/* Activities */}
          <Box mt={6}>
            <Typography variant="h6" fontWeight="bold" color="#894e06" mb={2}>
              Activities and Transportation
            </Typography>
            <ul style={{ paddingLeft: "20px", color: "#555" }}>
              <li>Activities: Boating, Jeep Safari, Hiking, Bonfire Nights</li>
              <li>Travel Mode: Comfortable 4x4 Jeep / Luxury Coaster</li>
              <li>Pickup & Drop-off included</li>
            </ul>
          </Box>

          {/* Meals */}
          <Box mt={6}>
            <Typography variant="h6" fontWeight="bold" color="#894e06" mb={2}>
              Accommodation and Meals
            </Typography>
            <Typography color="text.secondary">
              Comfortable hotels, guesthouses, or luxury camps with breathtaking views.
              Meals: Breakfast, Lunch, Dinner. Special dietary options available.
            </Typography>
          </Box>

          {/* Disclaimer */}
          <Box mt={6}>
            <Typography variant="h6" fontWeight="bold" color="#894e06" mb={2}>
              Disclaimer
            </Typography>
            <Typography color="text.secondary">
              Availability subject to booking time. Prices may vary based on season and demand.
              Travelers must carry valid ID. Inform operator of medical conditions.
            </Typography>
          </Box>
        </Grid>

        {/* Right Sidebar */}
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 3, backgroundColor: "#f5f8f9", borderRadius: 3 }}>
            {/* Request Quote */}
            <Box mb={4}>
              <Typography fontWeight="bold" mb={1}>
                3000Rs to 5000Rs (PKR)
              </Typography>
              <Typography variant="caption" display="block" mb={2}>
                Rate for 7 travelers. Request quote if more.
              </Typography>

              <Typography fontWeight="bold" mb={1}>
                Request a Quote
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Select a date"
                InputProps={{ startAdornment: <CalendarMonthIcon sx={{ mr: 1 }} /> }}
                sx={{ mb: 2 }}
              />
              <TextField
                select
                fullWidth
                size="small"
                defaultValue={7}
                InputProps={{ startAdornment: <GroupIcon sx={{ mr: 1 }} /> }}
              >
                {[...Array(30)].map((_, idx) => (
                  <MenuItem key={idx} value={idx + 1}>
                    {idx + 1} travelers
                  </MenuItem>
                ))}
              </TextField>
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2, backgroundColor: "#247a7e" }}
              >
                Get a Free Quote
              </Button>
            </Box>

            {/* Meeting and Pickup */}
            <Box mb={4}>
              <Typography variant="h6" fontWeight="bold" color="#894e06" mb={2}>
                Meeting and Pickup
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Excursionist Office, G-8 Markaz, Islamabad.
              </Typography>
            </Box>

            <Box mb={4}>
              <Typography variant="h6" fontWeight="bold" color="#894e06" mb={2}>
                Pickup Option
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Hotel pickup available 15 minutes before departure.
              </Typography>
            </Box>

            <Box mb={4}>
              <Typography variant="h6" fontWeight="bold" color="#894e06" mb={2}>
                End Point
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Custom drop-off locations in Islamabad.
              </Typography>
            </Box>

            {/* Customer Reviews */}
            <Box mb={4}>
              <Typography variant="h6" fontWeight="bold" color="#894e06" mb={2}>
                Customer Reviews
              </Typography>

              {[ 
                { name: "Ayesha R.", location: "Pak Pattan", review: "Naran Kaghan is truly a paradise. So well organized!" },
                { name: "Ahmed K.", location: "Hyderabad", review: "Pickup to drop-off, everything was handled professionally." },
                { name: "Bilal M.", location: "Islamabad", review: "The views were breathtaking and the trip was perfectly planned." },
              ].map((item, idx) => (
                <Paper key={idx} sx={{ p: 2, backgroundColor: "#f9f9f9", mb: 2 }}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <Avatar sx={{ width: 32, height: 32, mr: 1 }} />
                    <Box>
                      <Typography fontWeight="bold" fontSize="0.9rem">
                        {item.name}
                      </Typography>
                      <Typography fontSize="0.75rem" color="text.secondary">
                        {item.location}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {item.review}
                  </Typography>
                </Paper>
              ))}
            </Box>

            {/* Book this Trip Button */}
            <Button
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "#247a7e", mt: 3 }}
              onClick={() => navigate("/trip-summary")}
            >
              Book this Trip
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TripOverview;
