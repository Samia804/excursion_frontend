import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Footprints, Award, Sparkles, CheckCircle } from "lucide-react";

// Images
import heroImage from "../assets/hero.png";
import destination1 from "../assets/destination1.png";
import destination2 from "../assets/destination2.png";
import destination3 from "../assets/destination3.png";
import destination4 from "../assets/destination4.png";
import aboutImage from "../assets/mountain.png";

const destinations = [
  {
    title: "Naran & Kaghan Valley – Scenic beauty and alpine lakes.",
    image: destination1,
  },
  {
    title:
      "Hunza & Skardu – Mesmerizing landscapes, cultural heritage, and adventure.",
    image: destination2,
  },
  { title: "Swat & Malam Jabba – Ideal for nature lovers.", image: destination3 },
  { title: "Fairy Meadows & Deosai – A paradise for trekkers.", image: destination4 },
  { title: "Fairy Meadows & Deosai – A paradise for trekkers.", image: destination4 },
  { title: "Murree & Ayubia – A quick escape into the serene hills.", image: destination2 },
  { title: "Lahore & Islamabad City Tours – A blend of history and culture.", image: destination3 },
  { title: "Lahore & Islamabad City Tours – A blend of history and culture.", image: destination1 },
];

const slugify = (str) =>
  str
    .split("–")[0]
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/chat?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <Box
        sx={{
          height: 500,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          px: 2,
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Hi, I'm Lara—Your Personal Travel Agent
          </Typography>
          <Box
            sx={{
              mt: 3,
              p: 2,
              backgroundColor: "rgba(255,255,255,0.9)",
              borderRadius: 2,
              display: "flex",
              gap: 2,
              width: { xs: "90%", md: "70%" },
              mx: "auto",
            }}
          >
            <TextField
              fullWidth
              placeholder="Search your destination..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: "#247a7e" }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>

      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "#894e06" }}>
          Why Choose Us?
        </Typography>
        <Grid container spacing={4} justifyContent="center" mt={4}>
          <Grid item xs={12} sm={4}>
            <Box>
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  backgroundColor: "#f0e8e4",
                  mx: "auto",
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Footprints color="#247a7e" size={32} />
              </Box>
              <Typography variant="h6" sx={{ color: "#894e06", fontWeight: "bold" }}>
                Curated Experiences
              </Typography>
              <Typography variant="body2" sx={{ color: "#333", maxWidth: 280, mx: "auto", mt: 1 }}>
                Handpicked excursions designed to give you the best of every destination.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  backgroundColor: "#f0e8e4",
                  mx: "auto",
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Award color="#247a7e" size={32} />
              </Box>
              <Typography variant="h6" sx={{ color: "#894e06", fontWeight: "bold" }}>
                Local Expertise
              </Typography>
              <Typography variant="body2" sx={{ color: "#333", maxWidth: 280, mx: "auto", mt: 1 }}>
                Explore with trusted local guides who know the hidden spots.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  backgroundColor: "#f0e8e4",
                  mx: "auto",
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Sparkles color="#247a7e" size={32} />
              </Box>
              <Typography variant="h6" sx={{ color: "#894e06", fontWeight: "bold" }}>
                Custom Trips
              </Typography>
              <Typography variant="body2" sx={{ color: "#333", maxWidth: 280, mx: "auto", mt: 1 }}>
                Create a personalized trip tailored to your interests, pace, and schedule.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Top Destinations
        </Typography>
        <Typography textAlign="center" mb={4} color="text.secondary">
          Explore the most breathtaking locations in Pakistan curated just for you.
        </Typography>

        <Grid container spacing={4}>
          {destinations.map((dest, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box
                sx={{
                  height: 320,
                  borderRadius: 2,
                  backgroundImage: `url(${dest.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ p: 1.2, display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      backgroundColor: "#ffffff30",
                      px: 1,
                      borderRadius: 1,
                    }}
                  >
                    Top Place
                  </Typography>
                  <span>🤍</span>
                </Box>
                <Box sx={{ p: 2, background: "rgba(0,0,0,0.5)" }}>
                  <Typography fontSize="0.85rem">{dest.title}</Typography>
                  <Box display="flex" justifyContent="space-between" mt={1}>
                    <Typography fontSize="0.75rem">Destination Travel</Typography>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{ backgroundColor: "#8e502b" }}
                      onClick={() => navigate(`/trip-overview/${slugify(dest.title)}`)}
                    >
                      Explore
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          sx={{ color: "#894e06" }}
        >
          About us
        </Typography>
        <Typography
          textAlign="center"
          color="text.secondary"
          mb={4}
          maxWidth="sm"
          mx="auto"
        >
          Learn ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e
        </Typography>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src={aboutImage}
              alt="Road through mountain"
              style={{ width: "100%", borderRadius: 8 }}
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/600x400?text=About+Us+Image")
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            {[
              {
                title: "Customer Support",
                desc: "We're just a message away to help with any questions or needs you may have.",
              },
              {
                title: "Best Price Guaranteed",
                desc: "Enjoy the best for your adventure with our price-match guarantee.",
              },
              {
                title: "Many Location",
                desc: "Choose from a wide variety of destinations, from iconic sites to hidden gems.",
              },
            ].map((item, idx) => (
              <Box key={idx} display="flex" alignItems="flex-start" mb={3}>
                <CheckCircle color="#247a7e" size={28} style={{ marginRight: 12 }} />
                <Box>
                  <Typography fontWeight="bold" color="#894e06">
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">{item.desc}</Typography>
                </Box>
              </Box>
            ))}
            <Button variant="contained" sx={{ backgroundColor: "#247a7e" }}>
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
