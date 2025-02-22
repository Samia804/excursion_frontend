import React from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import HeroImage from "../assets/hero.png"; // Ensure the correct image path
import AboutImage from "../assets/about.png";
import Destination1 from "../assets/destination1.png";
import Destination2 from "../assets/destination2.png";
import Destination3 from "../assets/destination3.png";
import Destination4 from "../assets/destination4.png";
import Destination5 from "../assets/destination5.png";
import Destination6 from "../assets/destination6.png";

const destinations = [
  { title: "Majestic Mountains", img: Destination1 },
  { title: "Serene Valleys", img: Destination2 },
  { title: "Crystal Lakes", img: Destination3 },
  { title: "Snowy Peaks", img: Destination4 },
  { title: "Green Meadows", img: Destination5 },
  { title: "Mystic Forests", img: Destination6 },
];

const services = [
  { title: "24/7 Customer Support", description: "We’re here to help anytime." },
  { title: "Plan Travel Anywhere", description: "Global trip planning at your fingertips." },
  { title: "Risk-Free Booking", description: "Secure and flexible reservations." },
  { title: "Flexible Payment", description: "Multiple options for easy transactions." },
];

const Home = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Hi, I’m Lara – Your Personal Travel Agent
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Plan your perfect trip with expert guidance.
        </Typography>
        <Button variant="contained" sx={{ mt: 2, backgroundColor: "#2B7D8B", "&:hover": { backgroundColor: "#1E5F6A" } }}>
          Get Started
        </Button>
      </Box>

      {/* Why Choose Us Section */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 5 }}>
        Why Choose Us?
      </Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
        {["Convenience", "Local Expertise", "Cost-Efficient"].map((feature, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Paper elevation={3} sx={{ padding: "20px" }}>
              <Typography variant="h6">{feature}</Typography>
              <Typography sx={{ color: "gray", mt: 1 }}>We provide the best travel experience tailored to your needs.</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Top Destinations Section */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 5 }}>
        Top Destinations
      </Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
        {destinations.map((dest, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ padding: "10px", textAlign: "center" }}>
              <Box component="img" src={dest.img} alt={dest.title} sx={{ width: "100%", borderRadius: "8px" }} />
              <Typography variant="h6" sx={{ mt: 1 }}>{dest.title}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* About Us Section */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 5 }}>
        About Us
      </Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Box component="img" src={AboutImage} alt="About Us" sx={{ width: "100%", borderRadius: "8px" }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Box>
            <Typography variant="h6">We are dedicated to making your trips hassle-free and memorable.</Typography>
            <Button variant="contained" sx={{ mt: 2, backgroundColor: "#2B7D8B", "&:hover": { backgroundColor: "#1E5F6A" } }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Services Section */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 5 }}>
        Services
      </Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3} sx={{ padding: "20px", backgroundColor: "#FAEBD7" }}>
              <Typography variant="h6">{service.title}</Typography>
              <Typography sx={{ color: "gray", mt: 1 }}>{service.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Gradient Why Choose Us Section */}
      <Box sx={{ mt: 5, padding: "40px", background: "linear-gradient(to right, #2B7D8B, #1E5F6A)", color: "white" }}>
        <Typography variant="h5">Why Choose Us?</Typography>
        <Typography sx={{ mt: 1 }}>We make traveling easy and stress-free for you.</Typography>
      </Box>

      {/* Customer Reviews */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 5 }}>
        Trusted by Thousands of Happy Customers
      </Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 2, mb: 5 }}>
        {["Great Experience!", "Loved the Service!", "Will Book Again!"].map((review, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Paper elevation={3} sx={{ padding: "20px" }}>
              <Typography variant="h6">{review}</Typography>
              <Typography sx={{ color: "gray", mt: 1 }}>⭐⭐⭐⭐⭐</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
