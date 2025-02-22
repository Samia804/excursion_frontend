import React from 'react';
import { Container, Typography, Grid, Link } from '@mui/material';

function Footer() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 6,
        borderTop: '1px solid #e0e0e0',
        mt: 'auto',
      }}
    >
      <Grid container spacing={4}>
        {/* About Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            About
          </Typography>
          <Link href="#" color="inherit" display="block">
            How it works
          </Link>
          <Link href="#" color="inherit" display="block">
            Featured
          </Link>
          <Link href="#" color="inherit" display="block">
            Partnership
          </Link>
          <Link href="#" color="inherit" display="block">
            Business Relation
          </Link>
        </Grid>

        {/* Community Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Community
          </Typography>
          <Link href="#" color="inherit" display="block">
            Events
          </Link>
          <Link href="#" color="inherit" display="block">
            Blog
          </Link>
          <Link href="#" color="inherit" display="block">
            Podcast
          </Link>
          <Link href="#" color="inherit" display="block">
            Invite a friend
          </Link>
        </Grid>

        {/* Socials Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Socials
          </Typography>
          <Link href="#" color="inherit" display="block">
            Discord
          </Link>
          <Link href="#" color="inherit" display="block">
            Instagram
          </Link>
          <Link href="#" color="inherit" display="block">
            Twitter
          </Link>
          <Link href="#" color="inherit" display="block">
            Facebook
          </Link>
        </Grid>

        {/* Copyright Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Company Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ©2022 Company Name. All rights reserved
          </Typography>
          <Link href="#" color="inherit" display="block">
            Privacy & Policy
          </Link>
          <Link href="#" color="inherit" display="block">
            Terms & Condition
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;