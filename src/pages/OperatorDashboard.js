import React, { useState } from "react";
import {
  Box, Typography, Grid, Paper, TextField, Button, List, ListItem, ListItemText, IconButton, Divider
} from "@mui/material";
import { Line } from "react-chartjs-2";
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import OperatorSidebar from "../components/OperatorSidebar";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const OperatorDashboard = () => {
  const navigate = useNavigate();
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const plannedTrips = [
    { date: new Date(2025, 4, 2), title: "Hunza Adventure" },
    { date: new Date(2025, 4, 15), title: "Skardu Exploration" },
    { date: new Date(2025, 5, 7), title: "Naran Valley Visit" },
  ];

  const handleNoteAdd = () => {
    if (newNote.trim() !== "") {
      setNotes((prev) => [newNote.trim(), ...prev]);
      setNewNote("");
    }
  };

  const handleNoteDelete = (index) => {
    setNotes((prev) => prev.filter((_, i) => i !== index));
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Trips",
        data: [10, 20, 15, 25, 30, 28],
        fill: false,
        borderColor: "#247a7e",
        backgroundColor: "#247a7e",
        tension: 0.4,
        pointBorderWidth: 3,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { title: { display: false } },
      y: {
        title: {
          display: true,
          text: "Number of Trips",
          color: "#333",
          font: { size: 14 },
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#333",
          boxWidth: 12,
          padding: 20,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const tripOnDay = plannedTrips.find(
        (trip) => trip.date.toDateString() === date.toDateString()
      );
      if (tripOnDay) {
        return (
          <div style={{
            backgroundColor: "#247a7e",
            borderRadius: "50%",
            width: 8,
            height: 8,
            margin: "auto",
            marginTop: 2
          }} />
        );
      }
    }
    return null;
  };

  return (
    <Box sx={{ display: "flex" }}>
      <OperatorSidebar />
      <Box sx={{ flexGrow: 1, ml: { md: '240px' }, p: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Hello Myna, it's good to see you!
        </Typography>

        <Grid container spacing={3}>
          {/* Trip Bookings */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h6">📖 Trip Bookings</Typography>
              <Typography variant="body2">Manage and view bookings</Typography>
            </Paper>
          </Grid>

          {/* Plan a Trip */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{ p: 3, textAlign: "center", cursor: "pointer" }}
              onClick={() => navigate("/trip-planning-form")}
            >
              <Typography variant="h6">🛫 Plan a Trip</Typography>
              <Typography variant="body2">Customize trips for customers</Typography>
            </Paper>
          </Grid>

          {/* Graph */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 3, height: 400 }}>
              <Typography variant="h6" gutterBottom>Trips Trend</Typography>
              <Box sx={{ height: "90%", width: "100%" }}>
                <Line data={data} options={options} />
              </Box>
            </Paper>
          </Grid>

          {/* Calendar */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>Calendar</Typography>
              <Calendar
                onChange={setCalendarDate}
                value={calendarDate}
                minDate={new Date()}
                maxDate={new Date(new Date().getFullYear() + 5, 11, 31)}
                tileContent={tileContent}
              />
            </Paper>
          </Grid>

          {/* Upcoming Trips */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>Upcoming Planned Trips</Typography>
              <List>
                {plannedTrips.map((trip, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText primary={trip.title} secondary={trip.date.toDateString()} />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Notes */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>Notes</Typography>
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <TextField
                  placeholder="Create a note..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  fullWidth
                />
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#247a7e" }}
                  onClick={handleNoteAdd}
                >
                  Add
                </Button>
              </Box>
              <List>
                {notes.map((note, idx) => (
                  <React.Fragment key={idx}>
                    <ListItem
                      secondaryAction={
                        <IconButton edge="end" color="error" onClick={() => handleNoteDelete(idx)}>
                          <Delete />
                        </IconButton>
                      }
                    >
                      <ListItemText primary={note} />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OperatorDashboard;