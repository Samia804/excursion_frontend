import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  TextField,
  Grid,
  Paper,
} from "@mui/material";
import OperatorSidebar from "../components/OperatorSidebar";

const OperatorProfile = () => {
  const [companyName, setCompanyName] = useState("Your Company");
  const [bio, setBio] = useState("");
  const [logo, setLogo] = useState(null);
  const [cover, setCover] = useState(null);
  const [trips] = useState([
    { title: "Hunza Explorer", date: "May 2025" },
    { title: "Skardu Getaway", date: "June 2025" },
  ]);

  useEffect(() => {
    const storedName = localStorage.getItem("companyName") || "Excursionist Tours";
    setCompanyName(storedName);
  }, []);

  const handleLogoUpload = (e) => {
    if (e.target.files[0]) {
      setLogo(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleCoverUpload = (e) => {
    if (e.target.files[0]) {
      setCover(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <OperatorSidebar />

      <Box sx={{ flexGrow: 1, ml: { md: "240px" }, p: 3 }}>
        {/* Cover Image */}
        <Box
          sx={{
            height: 200,
            backgroundColor: "#eee",
            backgroundImage: cover ? `url(${cover})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 2,
            mb: 3,
            position: "relative",
          }}
        >
          <Button
            variant="contained"
            component="label"
            sx={{ position: "absolute", top: 10, right: 10, backgroundColor: "#247a7e" }}
          >
            Change Cover
            <input type="file" hidden accept="image/*" onChange={handleCoverUpload} />
          </Button>
        </Box>

        <Grid container spacing={3}>
          {/* Logo and Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
              <Avatar
                src={logo}
                alt="Operator Logo"
                sx={{ width: 120, height: 120, border: "2px solid #247a7e" }}
              />
              <Button variant="outlined" component="label">
                Edit Logo
                <input type="file" hidden accept="image/*" onChange={handleLogoUpload} />
              </Button>
              <Typography variant="h5" fontWeight="bold">
                {companyName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ⭐ 4.5 / 5 (Based on 26 reviews)
              </Typography>
            </Box>
          </Grid>

          {/* Bio and Contact */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" mb={2}>
                Company Bio
              </Typography>
              <TextField
                multiline
                fullWidth
                rows={4}
                placeholder="Write something about your company..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </Paper>
          </Grid>

          {/* Trips Posted */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" mb={2}>
                Trips You’ve Posted
              </Typography>
              <Grid container spacing={2}>
                {trips.map((trip, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                      sx={{
                        border: "1px solid #ccc",
                        borderRadius: 2,
                        p: 2,
                        backgroundColor: "#f7f7f7",
                      }}
                    >
                      <Typography variant="subtitle1" fontWeight="bold">
                        {trip.title}
                      </Typography>
                      <Typography variant="body2">{trip.date}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OperatorProfile;
