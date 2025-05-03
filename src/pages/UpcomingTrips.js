import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import santorini from "../assets/destination1.png";
import swiss from "../assets/destination2.png";
import ny from "../assets/destination3.png";

const upcomingTrips = [
  {
    id: 1,
    destination: "Santorini",
    country: "Greece",
    date: "June 2024",
    duration: "5 days",
    cost: "$850",
    image: santorini,
  },
  {
    id: 2,
    destination: "Swiss Alps",
    date: "May 2024",
    duration: "7 days",
    cost: "$1,200",
    image: swiss,
  },
  {
    id: 3,
    destination: "New York City",
    date: "May 2024",
    duration: "3 days",
    cost: "$500",
    image: ny,
  },
];

const UpcomingTrips = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Upcoming Trips
      </Typography>

      {upcomingTrips.map((trip) => (
        <Box key={trip.id} mb={3}>
          <Typography variant="h6" gutterBottom>
            {trip.date}
          </Typography>
          <Paper
            component={Link}
            to={`/upcoming-trip-details/${trip.id}`}
            elevation={2}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              textDecoration: "none",
              color: "inherit",
              "&:hover": { boxShadow: 4 },
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <img
                  src={trip.image}
                  alt={trip.destination}
                  style={{ width: 80, height: 80, borderRadius: 8 }}
                />
              </Grid>
              <Grid item xs>
                <Typography fontWeight="bold">{trip.destination}</Typography>
                {trip.country && (
                  <Typography variant="body2">{trip.country}</Typography>
                )}
                <Typography variant="body2">{trip.duration}</Typography>
              </Grid>
            </Grid>
            <Typography fontWeight="bold" fontSize="1.1rem">
              {trip.cost}
            </Typography>
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default UpcomingTrips;
