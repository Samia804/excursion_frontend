import React from "react";
import { Container, Typography, Button, Box, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaGlobe, FaUsers, FaHandshake } from "react-icons/fa";
import MountainImage from "../assets/mountain.png"; // Import the image

const heroStyle = {
  backgroundImage: `url(${MountainImage})`, // Use the imported image
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "white",
};

// Gradient Section Styling
const gradientSection = {
  background: "linear-gradient(to right, #804B23, #2B7D8B)",
  padding: "50px 20px",
  textAlign: "center",
  color: "white",
};

const JoinOperator = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Box sx={{ backgroundColor: "white", overflowY: "auto" }}>
      {/* Hero Section */}
      <Box sx={heroStyle}>
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold", mb: 3 }}>
            Join the Excursion Network
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Excursion connects tour operators with thousands of travelers looking for unique experiences. Sign up today and start offering your trips.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ fontSize: "1.2rem", padding: "10px 30px" }}
            onClick={() => navigate("/register")} // Redirect to Register page
          >
            Join as a Tour Operator
          </Button>
        </Container>
      </Box>

      {/* Section: Join as Tour Operator */}
      <Container sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4" sx={{ color: "black", fontWeight: "bold", mb: 3 }}>
          Join As A Tour Operator
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <FaGlobe size={50} color="#804B23" />
            <Typography sx={{ mt: 2 }}>Expand Your Reach</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FaUsers size={50} color="#804B23" />
            <Typography sx={{ mt: 2 }}>Get More Clients</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FaHandshake size={50} color="#804B23" />
            <Typography sx={{ mt: 2 }}>Grow Your Business</Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Section: Image with Text */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h5" sx={{ textAlign: "center", mb: 3 }}>
          Why Choose Excursion?
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box component="img" src="/images/sample.jpg" alt="Tour Image" sx={{ width: "100%", borderRadius: 2 }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography sx={{ mb: 2 }}>✓ Easy to Use</Typography>
            <Typography sx={{ mb: 2 }}>✓ Earn More</Typography>
            <Typography sx={{ mb: 2 }}>✓ Support & Guidance</Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Section: Grid Boxes */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h5" sx={{ mb: 3, textAlign: "left" }}>
          Key Features
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 3, backgroundColor: "#E0FFFF" }}>Feature 1</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 3, backgroundColor: "#E0FFFF" }}>Feature 2</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 3, backgroundColor: "#E0FFFF" }}>Feature 3</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 3, backgroundColor: "#E0FFFF" }}>Feature 4</Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Gradient Call to Action */}
      <Box sx={gradientSection}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Start Now - Become a Top Tour Operator
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ backgroundColor: "white", color: "#804B23", fontSize: "1.2rem" }}
          onClick={() => navigate("/register")} // Redirect to Register page
        >
          Apply Now
        </Button>
      </Box>

      {/* Already a Tour Operator Section */}
      <Container sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h5" sx={{ color: "#804B23", mb: 2 }}>
          Already a Tour Operator?
        </Typography>
        <Button
          variant="outlined"
          sx={{ borderColor: "#804B23", color: "#804B23", fontSize: "1.2rem" }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Container>
    </Box>
  );
};

export default JoinOperator;
