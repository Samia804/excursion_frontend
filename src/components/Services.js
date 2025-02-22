import React from "react";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import ServiceImage from "../assets/services.png"; // Ensure correct image path

const services = [
  { title: "Discover Tours", description: "Find your perfect trip", icon: "📍" },
  { title: "Custom Trips", description: "Tailor your own itinerary", icon: "✈️" },
  { title: "Exclusive Deals", description: "Get special discounts", icon: "💰" },
  { title: "24/7 Support", description: "We're here for you always", icon: "☎️" },
];

const Services = () => {
  return (
    <Box sx={{ padding: "40px", textAlign: "center" }}>
      {/* Banner Image */}
      <Box sx={{ width: "100%", height: "300px", background: `url(${ServiceImage}) center/cover` }}></Box>

      {/* Services Section */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 5, color: "#2B7D8B" }}>
        Our Services
      </Typography>
      <Typography sx={{ color: "gray", mb: 3 }}>Explore our range of travel solutions</Typography>

      {/* Services Grid */}
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3} sx={{ padding: "20px", backgroundColor: "#FAEBD7" }}>
              <Typography variant="h5">{service.icon}</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>{service.title}</Typography>
              <Typography sx={{ color: "gray", mt: 1 }}>{service.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Additional Sections */}
      <Box sx={{ mt: 5, padding: "20px", backgroundColor: "#F5F5DC" }}>
        <Typography variant="h5">Top Operators</Typography>
        <Typography sx={{ color: "gray", mb: 2 }}>Find trusted travel professionals</Typography>
        <Button variant="contained" sx={{ backgroundColor: "#2B7D8B", "&:hover": { backgroundColor: "#1E5F6A" } }}>
          View Operators
        </Button>
      </Box>

      <Box sx={{ mt: 5, padding: "20px", backgroundColor: "#F5F5DC" }}>
        <Typography variant="h5">Trusted by Thousands</Typography>
        <Typography sx={{ color: "gray", mb: 2 }}>See reviews from happy travelers</Typography>
        <Button variant="contained" sx={{ backgroundColor: "#2B7D8B", "&:hover": { backgroundColor: "#1E5F6A" } }}>
          Read Reviews
        </Button>
      </Box>
    </Box>
  );
};

export default Services;
