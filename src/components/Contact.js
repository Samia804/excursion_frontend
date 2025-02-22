import React from "react";
import { Box, Typography, TextField, Button, Grid, Paper } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ textAlign: "center", color: "#333" }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url('/assets/contact-hero.jpg')`, // Ensure this image exists
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          "We're Here to Help You!"
        </Typography>
      </Box>

      {/* Contact Form */}
      <Box sx={{ width: "80%", margin: "auto", mt: 5 }}>
        <Typography variant="h4" fontWeight="bold">
          Get in Touch with Us
        </Typography>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          {/* Form */}
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Name" variant="outlined" sx={{ mb: 2 }} />
            <TextField fullWidth label="Email" variant="outlined" sx={{ mb: 2 }} />
            <TextField fullWidth label="Message" multiline rows={4} variant="outlined" sx={{ mb: 2 }} />
            <Button fullWidth variant="contained" sx={{ backgroundColor: "#2B7D8B", "&:hover": { backgroundColor: "#1E5F6A" }, mb: 2 }}>
              Contact Us Now
            </Button>
            <Button fullWidth variant="contained" sx={{ backgroundColor: "#1E5F6A", "&:hover": { backgroundColor: "#14454D" } }}>
              Send a Message
            </Button>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box component="img" src="/assets/contact-img1.jpg" alt="Mountain" sx={{ width: "100%", borderRadius: "8px" }} />
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box component="img" src="/assets/contact-img2.jpg" alt="Lake" sx={{ width: "50%", borderRadius: "8px" }} />
              <Box component="img" src="/assets/contact-img3.jpg" alt="Snowy Peaks" sx={{ width: "50%", borderRadius: "8px" }} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Details */}
      <Box sx={{ width: "80%", margin: "auto", mt: 5, mb: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" sx={{ color: "#8B5E3C" }}>
              Office Address
            </Typography>
            <Typography>Excursion Office</Typography>
            <Typography>123-B, Main Boulevard, Johar Town, Lahore, Pakistan</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" sx={{ color: "#8B5E3C" }}>
              Email Us
            </Typography>
            <Typography>support@excursionoffice.com</Typography>
            <Typography>Reach out to us for queries, feedback, or assistance.</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" sx={{ color: "#8B5E3C" }}>
              Call Us
            </Typography>
            <Typography>+92 42 12345678</Typography>
            <Typography>Feel free to call us for any support or information during office hours.</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: "#2B7D8B", color: "white", padding: "20px", mt: 5 }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Excursion</Typography>
            <Typography sx={{ fontSize: "14px" }}>Our mission is to provide convenience and happiness in your travel experiences.</Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Community</Typography>
            <Typography sx={{ fontSize: "14px" }}>Events</Typography>
            <Typography sx={{ fontSize: "14px" }}>Blog</Typography>
            <Typography sx={{ fontSize: "14px" }}>Partnership</Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Socials</Typography>
            <Typography sx={{ fontSize: "14px" }}>Discord</Typography>
            <Typography sx={{ fontSize: "14px" }}>Instagram</Typography>
            <Typography sx={{ fontSize: "14px" }}>Twitter</Typography>
            <Typography sx={{ fontSize: "14px" }}>Facebook</Typography>
          </Grid>
        </Grid>
        <Typography sx={{ textAlign: "center", mt: 2, fontSize: "12px" }}>Terms & Conditions</Typography>
      </Box>
    </Box>
  );
};

export default Contact;
