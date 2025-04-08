import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from "@mui/material";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#247a7e", color: "white", pt: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand & Social */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Excursions
            </Typography>
            <Typography variant="body2" sx={{ color: "#d9f2f3", maxWidth: 240, mb: 2 }}>
              Our vision is to provide convenience and help increase your sales business.
            </Typography>
            <Box>
              <IconButton sx={{ color: "white" }}><Facebook size={20} /></IconButton>
              <IconButton sx={{ color: "white" }}><Twitter size={20} /></IconButton>
              <IconButton sx={{ color: "white" }}><Instagram size={20} /></IconButton>
            </Box>
          </Grid>

          {/* About */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>About</Typography>
            {["How it works", "Featured", "Partnership", "Business Relation"].map((item, idx) => (
              <Link key={idx} href="#" underline="none" sx={{ color: "#d9f2f3", display: "block", mb: 0.5 }}>
                {item}
              </Link>
            ))}
          </Grid>

          {/* Community */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Community</Typography>
            {["Events", "Blog", "Podcast", "Invite a friend"].map((item, idx) => (
              <Link key={idx} href="#" underline="none" sx={{ color: "#d9f2f3", display: "block", mb: 0.5 }}>
                {item}
              </Link>
            ))}
          </Grid>

          {/* Socials */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Socials</Typography>
            {["Discord", "Instagram", "Twitter", "Facebook"].map((item, idx) => (
              <Link key={idx} href="#" underline="none" sx={{ color: "#d9f2f3", display: "block", mb: 0.5 }}>
                {item}
              </Link>
            ))}
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: "#409ca0", my: 4 }} />

        {/* Bottom Bar */}
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" sx={{ color: "#d9f2f3" }}>
              ©2022 Company Name. All rights reserved
            </Typography>
          </Grid>
          <Grid item>
            <Box display="flex" gap={2}>
              <Link href="#" underline="none" sx={{ color: "#d9f2f3", fontSize: 14 }}>
                Privacy & Policy
              </Link>
              <Link href="#" underline="none" sx={{ color: "#d9f2f3", fontSize: 14 }}>
                Terms & Condition
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
