// src/pages/Calendar.js
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import "react-big-calendar/lib/css/react-big-calendar.css";
import OperatorSidebar from "../components/OperatorSidebar";

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState([
    {
      title: "Hunza Adventure",
      start: new Date(2025, 4, 2),
      end: new Date(2025, 4, 7),
    },
    {
      title: "Skardu Exploration",
      start: new Date(2025, 4, 15),
      end: new Date(2025, 4, 20),
    },
  ]);

  return (
    <Box sx={{ display: "flex" }}>
      <OperatorSidebar />

      <Box sx={{ flexGrow: 1, ml: { md: "240px" }, p: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h4" fontWeight="bold">
            My Trips Calendar
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#247a7e" }}
            onClick={() => navigate("/trip-planning-form")}
          >
            + Add Trip
          </Button>
        </Box>

        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "75vh" }}
          popup
        />
      </Box>
    </Box>
  );
};

export default CalendarPage;