// src/pages/CustomBid.js

import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom"; // ✅ Add this
import OperatorSidebar from "../components/OperatorSidebar";

const CustomBid = () => {
  const navigate = useNavigate(); // ✅ Hook to navigate

  // Example dummy data
  const trips = [
    { id: 1, name: "Ahmed Khan", destination: "Islamabad-Hunza", travelDates: "10-15 May 2026", travelers: "4 people", status: "Pending" },
    { id: 2, name: "Ahmed Khan", destination: "Islamabad-Hunza", travelDates: "10-15 May 2025", travelers: "4 people", status: "Pending" },
    { id: 3, name: "Ahmed Khan", destination: "Islamabad-Hunza", travelDates: "10-15 May 2025", travelers: "4 people", status: "Pending" },
  ];

  // Function to navigate to custom booking summary
  const handleViewRequest = () => {
    navigate("/custom-booking-summary"); // ✅ Navigate when clicked
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <OperatorSidebar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, ml: { xs: 0, md: "240px" }, p: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "#6b3d20" }}>
          Custom Trip and Quotes Request Queue
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Typography variant="body1" sx={{ mb: 3 }}>
          Select a Trip and start your bidding journey today........
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#1e6c70" }}>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Excursionist</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Destination</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Travel Dates</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Travelers</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Status</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Action</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Bid Completion</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {trips.map((trip) => (
                <TableRow key={trip.id} sx={{ backgroundColor: "#e0f7fa" }}>
                  <TableCell>{trip.name}</TableCell>
                  <TableCell>{trip.destination}</TableCell>
                  <TableCell>{trip.travelDates}</TableCell>
                  <TableCell>{trip.travelers}</TableCell>
                  <TableCell>{trip.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="text"
                      sx={{ color: "#247a7e", fontWeight: "bold" }}
                      onClick={handleViewRequest}
                    >
                      View Request
                    </Button>
                  </TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default CustomBid;
