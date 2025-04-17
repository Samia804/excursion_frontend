import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
} from "@mui/material";
import { Footprints, Award, Sparkles } from "lucide-react";

import heroImage from "../assets/hero.png";
//import featureImg from "../assets/mountain.png";
import img1 from "../assets/destination4.png";
import img2 from "../assets/destination1.png";

const JoinOperator = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: 500,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          px: 2,
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
            Join the Excursion Network —<br /> Expand Your Business!
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mx: "auto", mb: 3 }}>
            Excursion connects tour operators with thousands of travelers looking for unique experiences. Sign up today and start offering your trips!
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: "white", color: "#007b83", fontWeight: "bold" }}>
            Join as a Tour Operator
          </Button>
        </Box>
      </Box>


      {/* Why Choose Us */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          color="#6b3b1f"
          gutterBottom
        >
          Why Choose Us?
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {/* Curated Experiences */}
          <Grid item xs={12} sm={4} textAlign="center">
            <Box
              sx={{
                width: 70,
                height: 70,
                backgroundColor: "#f2ecea",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Footprints color="#247a7e" size={30} />
            </Box>
            <Typography variant="subtitle1" fontWeight="bold" color="#6b3b1f">
              Curated Experiences
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              "Handpicked excursions designed to give you the best of every destination."
            </Typography>
          </Grid>

          {/* Local Expertise */}
          <Grid item xs={12} sm={4} textAlign="center">
            <Box
              sx={{
                width: 70,
                height: 70,
                backgroundColor: "#f2ecea",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Award color="#247a7e" size={30} />
            </Box>
            <Typography variant="subtitle1" fontWeight="bold" color="#6b3b1f">
              Local Expertise
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              "Explore with trusted local guides who know the hidden spots."
            </Typography>
          </Grid>

          {/* Custom Trips */}
          <Grid item xs={12} sm={4} textAlign="center">
            <Box
              sx={{
                width: 70,
                height: 70,
                backgroundColor: "#f2ecea",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Sparkles color="#247a7e" size={30} />
            </Box>
            <Typography variant="subtitle1" fontWeight="bold" color="#6b3b1f">
              Custom Trips
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              "Create a personalized trip tailored to your interests, pace, and schedule."
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* What Can You Do - 2x2 Boxes */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight="bold" color="#6b3b1f" gutterBottom>
              What Can You Do as a Tour Operator?
            </Typography>
            <Typography variant="body1">
              Discover, explore, and experience Pakistan like never before. Whether you're looking for a peaceful retreat in the mountains, an exciting adventure, or a cultural deep dive, you have the perfect trip to offer.
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Let us handle the planning while you enjoy the journey.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {[
                {
                  title: "Expand Your Reach",
                  desc: "Connect with a large audience looking for unique experiences.",
                },
                {
                  title: "Secure Payments",
                  desc: "Get paid securely through our trusted partners.",
                },
                {
                  title: "Track Earnings",
                  desc: "View your income, pending payments, and withdrawals.",
                },
                {
                  title: "Seamless Bookings",
                  desc: "Let us handle the logistics while you focus on your trips.",
                },
              ].map((box, idx) => (
                <Grid item xs={6} key={idx}>
                  <Box
                    sx={{
                      backgroundColor: "#e6f0f1",
                      p: 2,
                      height: 160,
                      borderRadius: 2,
                    }}
                  >
                    <Typography fontWeight="bold">{box.title}</Typography>
                    <Typography variant="body2" mt={1}>
                      {box.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* CTA */}
      <Box
        sx={{
          py: 6,
          background: "linear-gradient(90deg, #7a5a37, #3e8b8f)",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Start Now – Become a Top Tour Operator
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, maxWidth: 600, mx: "auto" }}>
          Excursion is actively looking for passionate tour operators who want to grow their business and provide travelers with amazing experiences.
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Join today and be featured among our top operators!
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: "white", color: "#007b83", fontWeight: "bold", mb: 2 }}>
          Apply Now
        </Button>
        <br />
        <Button variant="outlined" sx={{ color: "white", borderColor: "white", textTransform: "none" }}>
          Learn More About Partnering with Us
        </Button>
      </Box>

      {/* Login & Join */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h6" fontWeight="bold" color="#6b3b1f" gutterBottom>
          Log In & Join as an Operator
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" gutterBottom>Already a Tour Operator?</Typography>
            <Button variant="contained" sx={{ mb: 2, backgroundColor: "#247a7e" }}>
              Log In to Your Dashboard
            </Button>
            <Typography variant="body2" gutterBottom>New Here?</Typography>
            <Button variant="contained" sx={{ backgroundColor: "#3e8b8f" }}>
              Sign Up and Start Offering Trips
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img src={img1} alt="Mountain 1" style={{ width: "100%", borderRadius: 8 }} />
              </Grid>
              <Grid item xs={6}>
                <img src={img2} alt="Mountain 2" style={{ width: "100%", borderRadius: 8 }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default JoinOperator;
