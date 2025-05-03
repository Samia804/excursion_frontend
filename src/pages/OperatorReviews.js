// src/pages/OperatorReviews.js
import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Avatar,
  Divider,
  Rating
} from "@mui/material";
import OperatorSidebar from "../components/OperatorSidebar";

const reviewsData = [
  {
    name: "Samantha M.",
    date: "April 16, 2024",
    rating: 5,
    review: "Absolutely fantastic experience! The guide was very knowledgeable and the itinerary was perfect.",
  },
  {
    name: "John D.",
    date: "April 10, 2024",
    rating: 5,
    review: "The trip was well-organized and exceeded my expectations. Great value for money.",
  },
  {
    name: "Emily R.",
    date: "March 28, 2024",
    rating: 5,
    review: "Had an amazing time! The accommodations and activities were top-notch.",
  },
  {
    name: "Michael B.",
    date: "March 17, 2024",
    rating: 4,
    review: "Lovely experience overall. Could improve communication before the trip.",
  },
];

const OperatorReviews = () => {
  const totalRating = reviewsData.reduce((acc, r) => acc + r.rating, 0);
  const avgRating = (totalRating / reviewsData.length).toFixed(1);

  return (
    <Box sx={{ display: "flex" }}>
      <OperatorSidebar />

      <Box sx={{ flexGrow: 1, ml: { md: '240px' }, p: 4 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: "#6b3d20", mb: 3 }}>
          Reviews
        </Typography>

        {/* Average Rating */}
        <Paper elevation={3} sx={{ p: 4, mb: 4, textAlign: "center" }}>
          <Typography variant="h3" fontWeight="bold">{avgRating}</Typography>
          <Rating value={Number(avgRating)} precision={0.1} readOnly size="large" />
          <Typography variant="body1" color="text.secondary">Based on {reviewsData.length} reviews</Typography>
        </Paper>

        {/* Individual Reviews */}
        <Grid container spacing={3}>
          {reviewsData.map((review, idx) => (
            <Grid item xs={12} key={idx}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Avatar sx={{ bgcolor: "#e1e4e8", color: "#333" }}>
                      {review.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography fontWeight="bold">{review.name}</Typography>
                      <Rating value={review.rating} readOnly size="small" />
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary">{review.date}</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body1">{review.review}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OperatorReviews;