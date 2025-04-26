import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import OperatorSidebar from "../components/OperatorSidebar";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
//   Legend,
// } from "recharts";

const tripData = [
  { location: "Murree", thisWeek: 120, lastWeek: 100 },
  { location: "Hunza", thisWeek: 300, lastWeek: 240 },
  { location: "Swat", thisWeek: 180, lastWeek: 160 },
  { location: "Skardu", thisWeek: 260, lastWeek: 210 },
  { location: "Naran", thisWeek: 230, lastWeek: 200 },
  { location: "Shogran", thisWeek: 100, lastWeek: 80 },
];

const OperatorDashboard = () => {
  return (
    <>
      <OperatorSidebar />
      </>
    // <Box sx={{ display: "flex" }}>

    //   <Box
    //     component="main"
    //     sx={{
    //       flexGrow: 1,
    //       bgcolor: "#f9f9f9",
    //       p: 4,
    //       marginLeft: "240px", // Sidebar offset
    //     }}
    //   >
    //     {/* Header Welcome */}
    //     <Typography variant="h5" fontWeight="bold" gutterBottom>
    //       Hello Myna! 👋
    //     </Typography>
    //     <Typography variant="body1" gutterBottom>
    //       It’s good to see you again.
    //     </Typography>

    //     {/* Quick Action Cards */}
    //     <Grid container spacing={3} sx={{ my: 2 }}>
    //       {["Upload a Trip", "Trip Bookings", "Plan A Trip"].map((label) => (
    //         <Grid item xs={12} md={4} key={label}>
    //           <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
    //             <Button variant="text" fullWidth>
    //               {label}
    //             </Button>
    //           </Paper>
    //         </Grid>
    //       ))}
    //     </Grid>

    //     {/* Stats and Calendar */}
    //     <Grid container spacing={3}>
    //       {/* Bar Chart Section */}
    //       <Grid item xs={12} md={8}>
    //         <Paper elevation={3} sx={{ p: 3 }}>
    //           <Typography variant="h6" gutterBottom>
    //             Trending Travel Destination
    //           </Typography>
    //           <ResponsiveContainer width="100%" height={300}>
    //             <BarChart data={tripData}>
    //               <CartesianGrid strokeDasharray="3 3" />
    //               <XAxis dataKey="location" />
    //               <YAxis />
    //               <Tooltip />
    //               <Legend />
    //               <Bar dataKey="thisWeek" fill="#fba928" name="This Week" />
    //               <Bar dataKey="lastWeek" fill="#ff5722" name="Last Week" />
    //             </BarChart>
    //           </ResponsiveContainer>
    //         </Paper>
    //       </Grid>

    //       {/* Calendar Section */}
    //       <Grid item xs={12} md={4}>
    //         <Paper elevation={3} sx={{ p: 3 }}>
    //           <Typography variant="h6" gutterBottom>
    //             Calendar
    //           </Typography>
    //           <Typography variant="body2">
    //             Today: {new Date().toDateString()}
    //           </Typography>
    //           <Divider sx={{ my: 2 }} />
    //           <Typography variant="body2" gutterBottom>
    //             Upcoming:
    //           </Typography>
    //           <ul style={{ paddingLeft: "1.2rem" }}>
    //             <li>April 25 – Hunza Group Trip</li>
    //             <li>April 28 – Skardu Exploration</li>
    //           </ul>
    //         </Paper>
    //       </Grid>

    //       {/* Ongoing Trips */}
    //       <Grid item xs={12} md={6}>
    //         <Paper elevation={3} sx={{ p: 3 }}>
    //           <Typography variant="h6" gutterBottom>
    //             Ongoing Trips
    //           </Typography>
    //           <List>
    //             <ListItem>
    //               <ListItemText
    //                 primary="Hunza & Skardu"
    //                 secondary="18th Feb to 20th March 2025 - 9:00 AM"
    //               />
    //             </ListItem>
    //             <Divider />
    //             <ListItem>
    //               <ListItemText
    //                 primary="Murree and Lahore"
    //                 secondary="15th Feb to 20th March 2025 - 9:00 AM"
    //               />
    //             </ListItem>
    //           </List>
    //         </Paper>
    //       </Grid>

    //       {/* Reminders */}
    //       <Grid item xs={12} md={6}>
    //         <Paper elevation={3} sx={{ p: 3 }}>
    //           <Typography variant="h6" gutterBottom>
    //             Personal Reminders
    //           </Typography>
    //           <List>
    //             <ListItem>
    //               <ListItemText primary="Update portfolio by Apr 30" />
    //             </ListItem>
    //             <Divider />
    //             <ListItem>
    //               <ListItemText primary="Respond to Hunza bid request" />
    //             </ListItem>
    //           </List>
    //         </Paper>
    //       </Grid>
    //     </Grid>
    //   </Box>
    // </Box>
  );
};

export default OperatorDashboard;
