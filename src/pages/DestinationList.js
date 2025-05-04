import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Rating,
  Slider,
  Chip,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { CalendarDays } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import destination1 from "../assets/destination1.png";

const allTrips = [
  {
    id: 1,
    slug: "naran-kaghan-adventure",
    title: "Naran Kaghan Adventure",
    description:
      "Maximize your trip to Naran Kaghan and immerse yourself in the breathtaking beauty of Pakistan’s northern paradise.",
    image: destination1,
    rating: 4,
    price: 4000,
    operator: "Excursionist Tours",
    duration: "4 hours",
  },
  {
    id: 2,
    slug: "islamabad-monal-hills-tour",
    title: "Islamabad & Monal Hills Tour",
    description:
      "Explore the modern & scenic beauty of Islamabad with breathtaking views from Monal!",
    image: destination1,
    rating: 3.5,
    price: 10000,
    operator: "Pak Nomads",
    duration: "4 hours",
  },
  {
    id: 3,
    slug: "lulusar-babusar-top-adventure",
    title: "Lulusar Lake & Babusar Top Adventure",
    description:
      "Experience the stunning blue waters of Lulusar Lake and enjoy panoramic views from Babusar Top",
    image: destination1,
    rating: 3,
    price: 10000,
    operator: "ExploreEase",
    duration: "4 hours",
  },
  {
    id: 4,
    slug: "fairy-meadows-nanga-parbat",
    title: "Fairy Meadows & Nanga Parbat",
    description:
      "Trek to the world’s most scenic meadows with a breathtaking view of Nanga Parbat!",
    image: destination1,
    rating: 2.5,
    price: 15000,
    operator: "Horizon Tours",
    duration: "4 hours",
  },
];

const filters = [
  "Weekend Getaways",
  "Day Trips",
  "Adventure Trips",
  "Family Trips",
  "Luxury Trips",
  "Custom Trips",
  "Budget- friendly",
];

const DestinationList = () => {
  const { destination } = useParams();
  const navigate = useNavigate();

  const slug = destination.toLowerCase().replace(/\s+/g, "-");
  const primaryTrip = allTrips.find((trip) => trip.slug.includes(slug));
  const otherTrips = allTrips.filter((trip) => trip.slug !== primaryTrip?.slug).slice(0, 3);
  const displayedTrips = primaryTrip ? [primaryTrip, ...otherTrips] : allTrips.slice(0, 4);

  return (
    <Box px={{ xs: 2, md: 6 }} py={6}>
      <Typography variant="caption" color="text.secondary">
        Home / {destination.replace(/-/g, " ")} / Popular Trips
      </Typography>

      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ textTransform: "capitalize", mt: 1, color: "#814f25" }}
      >
        {destination.replace(/-/g, " ")}
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2, mb: 3 }}>
        {filters.map((label, i) => (
          <Chip label={label} key={i} sx={{ backgroundColor: "#d1e1e1" }} />
        ))}
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography fontWeight="bold" mb={1}>
              <CalendarDays size={16} style={{ marginRight: 8 }} /> 15 dec
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Morning" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Morning" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Morning" />
            </FormGroup>
          </Paper>

          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography fontWeight="bold" mb={1}>Duration</Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Up to 1 hour" />
              <FormControlLabel control={<Checkbox />} label="1 to 4 hours" />
              <FormControlLabel control={<Checkbox />} label="4 hours to 1 day" />
            </FormGroup>
          </Paper>

          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography fontWeight="bold" mb={1}>Price</Typography>
            <Slider min={5000} max={24000} valueLabelDisplay="auto" defaultValue={10000} />
          </Paper>

          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography fontWeight="bold" mb={1}>Specials</Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Deals and discounts" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Last minute offers" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Exclusive Packages" />
            </FormGroup>
          </Paper>

          <Paper sx={{ p: 2 }}>
            <Typography fontWeight="bold" mb={1}>Specials</Typography>
            <FormGroup>
              {[4, 5, 3].map((val) => (
                <FormControlLabel
                  key={val}
                  control={<Checkbox />}
                  label={<Rating value={val} readOnly />}
                />
              ))}
            </FormGroup>
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Button size="small" color="error" sx={{ textTransform: "none" }}>
              Clear all filters
            </Button>
            <Select defaultValue="featured" size="small">
              <MenuItem value="featured">Featured</MenuItem>
              <MenuItem value="price-low">Price: Low to High</MenuItem>
              <MenuItem value="price-high">Price: High to Low</MenuItem>
            </Select>
          </Box>

          {displayedTrips.map((trip) => (
            <Paper
              key={trip.id}
              sx={{ display: "flex", mb: 3, p: 2, alignItems: "center", cursor: "pointer" }}
              onClick={() => navigate(`/trip/${trip.id}`)}
            >
              <Box
                component="img"
                src={trip.image}
                alt={trip.title}
                sx={{ width: 180, height: 140, objectFit: "cover", borderRadius: 2, mr: 2 }}
              />
              <Box flex={1}>
                <Typography variant="body2" color="text.secondary" fontWeight="medium">
                  Rating <Rating value={trip.rating} precision={0.5} readOnly size="small" />
                </Typography>
                <Typography fontWeight="bold" sx={{ color: "#814f25", mt: 1 }}>
                  {trip.title}
                </Typography>
                <Typography variant="body2" mt={0.5}>{trip.description}</Typography>
                <Typography variant="caption" mt={0.5} display="block">
                  Free cancellation
                </Typography>
                <Typography variant="caption">{trip.duration}</Typography>
              </Box>
              <Box textAlign="right">
                <Typography fontWeight="bold" sx={{ mb: 1 }}>
                  Price {trip.price}
                </Typography>
                <Typography variant="caption">{trip.operator}</Typography>
              </Box>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default DestinationList;
