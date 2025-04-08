import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Divider,
} from "@mui/material";

// Images
import heroImage from "../assets/hero.png";
import img1 from "../assets/mountain.png";
import img2 from "../assets/mountain.png";
import img3 from "../assets/mountain.png";
import img4 from "../assets/mountain.png";

const Contact = () => {
  return (
    <>
      {/* =================== Hero Section =================== */}
      <Box
        sx={{
          height: 400,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          px: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          We’re Here to Help You!
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, maxWidth: 600 }}>
          Have questions? Drop us a message and we’ll get back to you shortly.
        </Typography>
      </Box>

      {/* =================== Who We Are + Our Vision =================== */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Who We Are Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold" color="#6b3b1f" gutterBottom>
              Who we are
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              We are passionate explorers, dedicated to providing seamless travel experiences.
              Our mission is to connect travelers with nature, cultures, and unforgettable
              journeys around the globe. With our personalized itineraries and expert support,
              we make your journey stress-free and enjoyable.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Box component="img" src={img3} alt="Explorer" sx={{ width: "100%", borderRadius: 2 }} />
            </Box>
          </Grid>

          {/* Our Vision Section */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Box component="img" src={img4} alt="Journey" sx={{ width: "100%", borderRadius: 2 }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Typography variant="h5" fontWeight="bold" color="#6b3b1f" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              To create immersive and sustainable travel experiences that inspire people
              to connect more deeply with communities, positively impact the environment,
              and discover the world with purpose. Join us and redefine how you travel forever.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* =================== Contact Form Section =================== */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 4, color: "#6b3b1f", borderBottom: "2px solid #ddd", pb: 1 }}
        >
          Get in Touch with Us
        </Typography>

        <Grid container spacing={6}>
          {/* Left Side: Contact Form */}
          <Grid item xs={12} md={6}>
            <Box component="form">
              <TextField fullWidth label="Name" variant="outlined" margin="normal" />
              <TextField fullWidth label="Email" type="email" variant="outlined" margin="normal" />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
              />
              <Box sx={{ mt: 2 }}>
                {/* Single Send Button */}
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: "#3e8b8f", textTransform: "none" }}
                >
                  Send a Message
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Side: Destination Images */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <img
                src={img1}
                alt="lake view"
                style={{ width: "100%", borderRadius: 8 }}
              />
              <img
                src={img2}
                alt="mountains"
                style={{ width: "100%", borderRadius: 8 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* =================== Footer Contact Info Section =================== */}
      <Divider />
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography fontWeight="bold" gutterBottom>
              Office Address
            </Typography>
            <Typography variant="body2">
              Excursion Office<br />
              123-B, Main Boulevard, Johar Town,<br />
              Lahore, Pakistan
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography fontWeight="bold" gutterBottom>
              Email Us
            </Typography>
            <Typography variant="body2">
              support@excursionoffice.com<br />
              Reach out to us for queries, feedback, or assistance.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography fontWeight="bold" gutterBottom>
              Call Us
            </Typography>
            <Typography variant="body2">
              +92 42 12345678<br />
              Feel free to call us for any support or information during office hours.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
