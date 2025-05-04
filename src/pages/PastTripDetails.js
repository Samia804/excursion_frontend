import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Paper,
  Avatar,
  Grid,
} from "@mui/material";
import { CalendarMonth, AccessTime } from "@mui/icons-material";

// Sample trip data
const trips = [
  {
    id: "1",
    destination: "Santorini",
    image: require("../assets/destination1.png"),
    dateRange: "Nov 6, 2023 – Nov 11, 2023",
    duration: "5 days",
    details:
      "Experience the unforgettable beauty of Santorini, with its iconic blue domes and stunning sunsets over the caldera. Immerse yourself in rich history and breathtaking landscapes.",
    cost: "$850",
    operator: {
      name: "Mark Tourman",
      agency: "Adventure Excursions",
    },
  },
  {
    id: "2",
    destination: "Swiss Alps",
    image: require("../assets/destination2.png"),
    dateRange: "Aug 1, 2023 – Aug 7, 2023",
    duration: "7 days",
    details:
      "A breathtaking adventure in the heart of the Swiss Alps with snow-capped mountains, fresh air, and thrilling hikes.",
    cost: "$1,200",
    operator: {
      name: "Lena Muller",
      agency: "Alpine Getaways",
    },
  },
  {
    id: "3",
    destination: "New York City",
    image: require("../assets/destination3.png"),
    dateRange: "Feb 10, 2023 – Feb 13, 2023",
    duration: "3 days",
    details:
      "Explore the energy of NYC — from Times Square to Central Park, immerse yourself in the city that never sleeps.",
    cost: "$500",
    operator: {
      name: "James Clark",
      agency: "Urban Explorers",
    },
  },
];

const PastTripDetails = () => {
  const { id } = useParams();
  const trip = trips.find((t) => t.id === id);

  if (!trip) {
    return <Typography variant="h6" sx={{ p: 4 }}>Trip not found.</Typography>;
  }

  return (
    <Box sx={{ px: 4, py: 5 }}>
      <Paper sx={{ p: 3 }}>
        <Box
          component="img"
          src={trip.image}
          alt={trip.destination}
          sx={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            borderRadius: 2,
            mb: 3,
          }}
        />

        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {trip.destination}
        </Typography>

        <Grid container spacing={2} alignItems="center" mb={2}>
          <Grid item>
            <CalendarMonth fontSize="small" />
          </Grid>
          <Grid item>
            <Typography variant="body2">{trip.dateRange}</Typography>
          </Grid>
          <Grid item>
            <AccessTime fontSize="small" />
          </Grid>
          <Grid item>
            <Typography variant="body2">{trip.duration}</Typography>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#145c54", mb: 3 }}
        >
          Rate This Trip
        </Button>

        <Typography variant="h6" gutterBottom>
          Trip Details
        </Typography>
        <Typography variant="body1" mb={4}>
          {trip.details}
        </Typography>

        <Typography variant="h6" gutterBottom>
          Tour Operator
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              alt={trip.operator.name}
              src={`https://mui.com/static/images/avatar/${Math.floor(
                Math.random() * 30
              ) + 1}.jpg`}
              sx={{ width: 56, height: 56 }}
            />
          </Grid>
          <Grid item>
            <Typography fontWeight="bold">{trip.operator.name}</Typography>
            <Typography variant="body2">{trip.operator.agency}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default PastTripDetails;
