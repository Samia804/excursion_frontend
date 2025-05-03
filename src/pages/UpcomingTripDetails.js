import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  Avatar,
} from "@mui/material";
import { CalendarMonth, AccessTime, LocationOn } from "@mui/icons-material";

// Sample upcoming trip data
const upcomingTrips = [
  {
    id: "1",
    destination: "Santorini",
    country: "Greece",
    dateRange: "Jun 1, 2024 – Jun 6, 2024",
    duration: "5 days",
    cost: "$850",
    image: require("../assets/destination1.png"),
    details:
      "Experience the unforgettable beauty of Santorini, with its iconic blue domes and stunning sunsets over the caldera.",
    operator: {
      name: "Mark Tourman",
      agency: "Adventure Excursions",
    },
  },
  {
    id: "2",
    destination: "Swiss Alps",
    country: "Switzerland",
    dateRange: "May 10, 2024 – May 17, 2024",
    duration: "7 days",
    cost: "$1,200",
    image: require("../assets/destination2.png"),
    details:
      "Trek through the breathtaking Swiss Alps with panoramic mountain views and serene alpine lakes.",
    operator: {
      name: "Lena Muller",
      agency: "Alpine Getaways",
    },
  },
  {
    id: "3",
    destination: "New York City",
    country: "USA",
    dateRange: "May 21, 2024 – May 24, 2024",
    duration: "3 days",
    cost: "$500",
    image: require("../assets/destination3.png"),
    details:
      "Explore the vibrant culture and iconic landmarks of New York City, the city that never sleeps.",
    operator: {
      name: "James Clark",
      agency: "Urban Explorers",
    },
  },
];

const UpcomingTripDetails = () => {
  const { id } = useParams();
  const trip = upcomingTrips.find((t) => t.id === id);

  if (!trip) {
    return <Typography sx={{ p: 4 }}>Trip not found.</Typography>;
  }

  const handleCancelTrip = () => {
    alert(`Your trip to ${trip.destination} has been canceled.`);
  };

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

        <Grid container spacing={1} alignItems="center" mb={2}>
          <Grid item>
            <LocationOn fontSize="small" />
          </Grid>
          <Grid item>
            <Typography variant="body2">{trip.country}</Typography>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          onClick={handleCancelTrip}
          sx={{ backgroundColor: "#145c54", mb: 3 }}
        >
          Cancel Trip
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

export default UpcomingTripDetails;
