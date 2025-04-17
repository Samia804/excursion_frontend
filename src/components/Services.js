import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  Avatar,
} from "@mui/material";
import {
  Briefcase,
  ClipboardList,
  MapPin,
  Send,
} from "lucide-react";
import servicesHero from "../assets/services.png";

const testimonials = [
  {
    name: "Vizeh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    text: "“Wow... I am very happy to use this VPN. It turned out to be more than my expectations and so far there have been no problems. I use it daily. Always the best.”",
  },
  {
    name: "Vizeh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    text: "“Wow... I am very happy to use this VPN. It turned out to be more than my expectations and so far there have been no problems. I use it daily. Always the best.”",
  },
  {
    name: "Vizeh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    text: "“Wow... I am very happy to use this VPN. It turned out to be more than my expectations and so far there have been no problems. I use it daily. Always the best.”",
  },
];

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: "300px", md: "450px" },
          backgroundImage: `url(${servicesHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>

      <Container sx={{ py: 10 }}>
        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ color: "#894e06", mb: 1 }}
        >
          Our Services
        </Typography>
        <Typography textAlign="center" color="text.secondary" mb={8}>
          Discover how we make trip planning effortless and enjoyable with
          these personalized services:
        </Typography>

        {/* Discover Section */}
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#894e06", mb: 2 }}
            >
              Discover Your Next Adventure
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
              Planning your trip has never been easier. Whether it’s a
              pre-designed package or a custom itinerary, we make every journey
              seamless and unforgettable. Your next adventure starts here!
              <br />
              <br />
              Click below to explore our services and start planning today!
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: "#247a7e" }}>
              Learn More
            </Button>
          </Grid>

          {/* Services Boxes */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {/* Service Card */}
              {[
                {
                  title: "Become a Tour Operator",
                  desc: "Start your travel business with ease. Use our platform to design trips, manage bookings, and grow your travel community effortlessly.",
                  icon: <Briefcase size={28} />,
                },
                {
                  title: "Custom Trip Planning",
                  desc: "Turn your dream vacation into reality. We customize every detail of your trip, ensuring it matches your preferences and needs.",
                  icon: <ClipboardList size={28} />,
                },
                {
                  title: "Book Pre-Planned Trips",
                  desc: "Select from expertly crafted trips that are ready to go. These itineraries are designed to give you the best travel experience without any stress.",
                  icon: <MapPin size={28} />,
                },
                {
                  title: "Recommend and Share Trips",
                  desc: "Help others explore by recommending your favorite trips. Share itineraries and inspire new adventures within the travel community.",
                  icon: <Send size={28} />,
                },
              ].map((item, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Paper
                    elevation={0}
                    sx={{
                      backgroundColor: "#d3e5ea",
                      p: 3,
                      borderRadius: 2,
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        backgroundColor: "#333",
                        color: "#fff",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography fontWeight="bold" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Customer Trip Planning */}
        <Box mt={10}>
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            sx={{ color: "#894e06", mb: 1 }}
          >
            Customer Trip Planning
          </Typography>
          <Typography textAlign="center" color="text.secondary" mb={5}>
            We specialize in creating tailored travel experiences. Whether it's
            a solo adventure or a group getaway, we ensure every trip is
            customized to your needs.
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {[
              {
                title: "Personalized Itineraries",
                desc: "Each plan is uniquely crafted to reflect your taste, budget, and time.",
              },
              {
                title: "Stress-Free Planning",
                desc: "We handle the logistics so you can focus on enjoying your trip.",
              },
            ].map((item, i) => (
              <Grid item xs={12} sm={8} key={i}>
                <Paper elevation={0} sx={{ backgroundColor: "#e6eff1", p: 3 }}>
                  <Typography fontWeight="bold">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Trip Operators */}
        <Box mt={10}>
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            sx={{ color: "#894e06", mb: 1 }}
          >
            Trip Operators
          </Typography>
          <Typography textAlign="center" color="text.secondary" mb={5}>
            Join our platform and turn your passion for travel into a rewarding
            career. We provide all the tools and resources you need to succeed
            as a trip operator.
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {[
              {
                title: "Design Unique Travel Experiences",
                desc: "Create and offer personalized travel packages tailored to your audience. Whether it’s adventure trips, cultural tours, or relaxing getaways, you can craft unique experiences that stand out.",
              },
              {
                title: "Grow Your Travel Business",
                desc: "Manage bookings, promote your services, and connect with a wide audience. With our platform, you’ll have everything you need to expand your business and deliver exceptional travel services.",
              },
            ].map((item, i) => (
              <Grid item xs={12} sm={8} key={i}>
                <Paper elevation={0} sx={{ backgroundColor: "#d3e5ea", p: 3 }}>
                  <Typography fontWeight="bold">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials */}
        <Box mt={10} mb={8}>
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            sx={{ color: "#894e06", mb: 1 }}
          >
            Trusted by Thousands of Happy Customers
          </Typography>
          <Typography textAlign="center" color="text.secondary" mb={4}>
            Here’s what our happy travelers say about us!
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {testimonials.map((review, i) => (
              <Grid item xs={12} sm={4} key={i}>
                <Paper elevation={1} sx={{ p: 3, backgroundColor: "#f7f0e8" }}>
                  <Box display="flex" justifyContent="space-between" mb={2}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Avatar
                        sx={{ width: 30, height: 30, backgroundColor: "#3b8b94" }}
                      />
                      <Box>
                        <Typography fontWeight="bold">
                          {review.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {review.location}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2">{review.rating}</Typography>
                  </Box>
                  <Typography variant="body2" fontStyle="italic">
                    {review.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Services;