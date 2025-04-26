// src/components/OperatorSidebar.js

import React from "react";
import { Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import {
  LayoutDashboard,
  Edit,
  Star,
  Settings,
  BarChart2,
  CalendarDays,
  Bell,
  LogOut,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const OperatorSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard", icon: <LayoutDashboard />, path: "/operator-dashboard" },
    { label: "Custom Trips", icon: <Edit />, path: "/custom-trips" },
    { label: "Bid Itineraries", icon: <List />, path: "/bid-itineraries" },
    { label: "Reviews", icon: <Star />, path: "/reviews" },
    { label: "Calendar", icon: <CalendarDays />, path: "/calendar" },
    { label: "Analytics", icon: <BarChart2 />, path: "/analytics" },
    { label: "Notifications", icon: <Bell />, path: "/notifications" },
    { label: "Settings", icon: <Settings />, path: "/settings" },
    { label: "Logout", icon: <LogOut />, path: "/login" },
  ];

  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        bgcolor: "#1e6c70",
        color: "white",
        display: "flex",
        flexDirection: "column",
        py: 3,
        px: 1.5,
        position: "fixed",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <h2 style={{ margin: 0, fontSize: "1.5rem" }}>Excursionist</h2>
        <p style={{ fontSize: "0.9rem", color: "#b0c4c8" }}>Tour Operator Panel</p>
      </Box>

      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.label}
            onClick={() => navigate(item.path)}
            sx={{
              borderRadius: 1,
              backgroundColor: location.pathname === item.path ? "#3e8b8f" : "transparent",
              "&:hover": {
                backgroundColor: "#3e8b8f",
              },
              mb: 1,
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default OperatorSidebar;
